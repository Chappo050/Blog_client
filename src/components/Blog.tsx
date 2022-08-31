import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

const api = axios.create({
  baseURL: "http://localhost:5000/blog",
});

interface User {
  _id: String;
  username: String;
}

interface Post {
  _id: String;
  user_details: User;
  message: String;
  post_time: String;
  public: Boolean;
}

const defaultPost: Post[] = [];

function Blog() {
  const [posts, setPosts]: [Post[], (posts: Post[]) => void] =
    useState(defaultPost);

  useEffect(() => {
    api.get("/").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className=" grid grid-cols-5">
        <i />
        <div className="text-2xl text-center col-span-3">
          {posts ? posts.map((post) => PostContainer(post)) : <h1>No posts yet</h1>}
        </div>

        <i />
      </div>
    </div>
  );
}

const PostContainer = (post: Post) => {
  return (
    <div className="border border-custom-silver mt-3 p-3">
      <div>
        <h2>Posted By: {post.user_details.username}</h2>
        <h2>Post time: {post.post_time}</h2>
        <h2>Message: {post.message}</h2>
      </div>
    </div>
  );
};

export default Blog;
