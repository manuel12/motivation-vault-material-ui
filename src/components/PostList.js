import React from "react";
import Post from "./Post";

const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PostList = () => {
  return posts.map((post, i) => <Post key={i} />);
};

export default PostList;
