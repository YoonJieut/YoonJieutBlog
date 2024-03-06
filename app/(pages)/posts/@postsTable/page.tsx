"use client";

import React, { useEffect, useState } from "react";
import {
  PostAuthorIdProps,
  PostContentProps,
  PostIdProps,
  PostTitleProps,
} from "@/app/_interfaces/PostTableProps";
import Link from "next/link";
import PostsTableItem from "@/app/components/ui/Molecules/Lists/PostsTableItem";

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
    <ul className="postsTable w-2/3 h-full flex flex-col space-y-14 overflow-y-scroll overflow-x-hidden">
      {posts.map((post) => (
        <PostsTableItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
