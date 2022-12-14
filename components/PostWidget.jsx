import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-gray-900 shadow-lg rounded-lg p-8 mb-8 border-red-300 border-2 text-red-200">
      <h3 className="text-xl mb-8 font-semibold border-b border-red-200 pb-4 text-white">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              className="rounded-full align-middle"
              src={post.featuredImage.url}
              alt={post.title}
              height="60px"
              width="60px"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-400 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              key={post.title}
              className="text-md"
              href={`/blog/${post.slug}`}
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
