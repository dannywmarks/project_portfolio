import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="bg-gray-900 border-red-300 border-2 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 text-white">
      <div className="relative overflow-hidden pb-80 mb-6">

        <Image
          className="object-top absolute h-80 w-full object-cover object-center  shadow-lg rounded-t-lg lg:rounded-lg"
          src={post.featuredImage?.url}
          alt="feature image"
          layout="fill"
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-red-300 text-red-200 text-3xl font-semibold">
        <Link href={`post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full-height">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            className="rounded-full align-middle"
            height={40}
            width={40}
            
          />
           <p className="inline align-middle text-white ml-2 text-lg">{post.author.name}</p>
        </div>
       <div className="font-medium text-gray-400">
        <span>
          {moment(post.createdAt).format('MMM DD, YYYY')}
        </span>
       </div>
      </div>
      <p className="text-center text-lg px-4 lg:px-20 mb-8">{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/blog/${post.slug}`}>
          <span       className="p-6 text-[1.5rem] outline px-4 py-2 mt-4 mb-2 font-bold cursor-pointer text-red-300 rounded-full hover:text-black hover:bg-red-200 hover:border-6-black font-poppins">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
