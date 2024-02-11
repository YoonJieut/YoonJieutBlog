"use client";

import React, { useEffect, useState } from "react";
import {
  PostAuthorIdProps,
  PostContentProps,
  PostIdProps,
  PostTitleProps,
} from "@/app/_interfaces/PostTableProps";
import Link from "next/link";

export interface Post
  extends PostIdProps,
    PostTitleProps,
    PostContentProps,
    PostAuthorIdProps {}

export default function PostsTable() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Content</th>
          <th>Author ID</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>
              <Link href={`/posts/${post.id}`} key={post.id} className="block">
                {post.id}
              </Link>
            </td>
            <td>
              <Link href={`/posts/${post.id}`} key={post.id} className="block">
                {post.title}
              </Link>
            </td>
            <td>
              <Link href={`/posts/${post.id}`} key={post.id} className="block">
                {post.content}
              </Link>
            </td>
            <td>{post.authorId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
