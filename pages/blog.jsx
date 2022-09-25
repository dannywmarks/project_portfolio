import React from "react";
import { PostCard, PostWidget, Categories, BlogHeader } from "../components";
import { getPosts } from "../services";

const Blog = ({ posts }) => {
 
  return (
    <div className="contaienr mx-auto px-8 mb-8">
      <BlogHeader />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (

            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>

        <div className="lg:col-span-4" col-span-1>
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
