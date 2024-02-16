"use client";

import DetailLine from "@/app/components/ui/DetailLine";
import { useEffect, useState } from "react";
import { Post } from "@/app/_interfaces/PostTableProps";
import Btn from "@/app/components/Atom/Btn";

export default function AdminPostsView() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (postId: number) => {
    // TODO: Implement delete functionality
  };

  return (
    <div className="adminPostsView">
      <h3 className="text-xl font-bold text-blue-500 mb-5">Post Lists</h3>
      <DetailLine className="w-12" />
      <ul className="adminPostUl flex flex-col space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="flex w-full justify-between">
            <span className="contentPart flex space-x-4">
              <h2>{post.title}</h2>
              <p>|</p>
              <p>{post.content}</p>
            </span>
            <Btn onClick={() => handleDelete(post.id)}>Delete</Btn>
          </li>
        ))}
      </ul>
    </div>
  );
}
