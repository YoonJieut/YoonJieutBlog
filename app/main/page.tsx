"use client";
import React, { useState } from "react";

export default function Main() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log("fetchPost err : ", err)); // TODO: handle error
  };

  return (
    <div>
      <button onClick={fetchPosts}>Fetch Posts</button>
      {/* {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))} */}
    </div>
  );
}
