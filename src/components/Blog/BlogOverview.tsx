import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Nav";
const { DateTime } = require("luxon");

const api = axios.create({
  baseURL: "http://localhost:5000/blog/overview",
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

function BlogOverview() {
  const [posts, setPosts]: [Post[], (posts: Post[]) => void] =
    useState(defaultPost);

  const [count, setCount] = useState(0);

  const [postPointer, setPostsPointer] = useState(0);

  //Initialize data
  useEffect(() => {
    api
      .get("/", {
        params: {
          pointer: postPointer,
        },
      })
      .then((res) => {
        setPosts(res.data);
      });

    api.get("/count").then((res) => {
      setCount(res.data);
    });
  }, []);

  //get data for next page
  useEffect(() => {
    api
      .get("/", {
        params: {
          pointer: postPointer,
        },
      })
      .then((res) => {
        setPosts(res.data);
      });
    window.scrollTo(0, 0);
  }, [postPointer]);

  function getNextSet() {
    //increment pointer to get next 10
    if (postPointer + 10 > count) {
      return;
    }
    setPostsPointer(postPointer + 10);
  }

  function getPrevSet() {
    if (postPointer < 10) {
      return;
    }
    //increment pointer to get prev 10
    setPostsPointer(postPointer - 10);
  }

  return (
    <div>
      <div className=" grid grid-cols-5">
        <i />
        <div className="text-2xl text-center col-span-3">
          <h1>10 MOST RECENT POSTS</h1>
          {posts ? (
            posts.map((post) => PostContainer(post))
          ) : (
            <h1>No posts yet</h1>
          )}
          <div className="pt-5">
            <button
              className="text-4xl hover:bg-custom-dark-blue w-10 "
              onClick={getPrevSet}
            >
              {"<"}
            </button>
            <i className="w-5 px-10" />
            <button
              className="text-4xl hover:bg-custom-dark-blue w-10"
              onClick={getNextSet}
            >
              {">"}
            </button>
          </div>
        </div>

        <i />
      </div>
    </div>
  );
}

//Creates a singular post
const PostContainer = (post: Post) => {
  const user_id: String = post.user_details._id;
  return (
    <div className="border border-custom-silver mt-3 p-3">
      <div>
        <div className="grid grid-cols-2 text-base ">
          <div className=" text-left">
            Posted By: {post.user_details.username}
          </div>
          <div className="text-right">
            Post time: {DateTime.fromISO(post.post_time).toFormat("ff")}
          </div>
        </div>
        <br />
        <div className="text-xl break-words">{post.message}</div>
      </div>
    </div>
  );
};

export default BlogOverview;
