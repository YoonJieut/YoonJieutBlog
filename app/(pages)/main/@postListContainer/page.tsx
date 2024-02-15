"use client";

import React, { useEffect, useState } from "react";
import {
  PostAuthorIdProps,
  PostContentProps,
  PostIdProps,
  PostTitleProps,
} from "@/app/_interfaces/PostTableProps";
// import Link from "next/link";
import { shuffleArray } from "@/app/utils/suffleArray";
import fetchJSON from "@/app/utils/frontend/fetchJSON";
import PostItem from "@/app/components/main/PostListContainer/PostItem";

interface Post
  extends PostIdProps,
    PostTitleProps,
    PostContentProps,
    PostAuthorIdProps {}

export default function PostsListContainer() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchJSON("api/posts")
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts : ", error);
      });
  }, []);
  const shuffledPosts = shuffleArray(posts);

  return (
    <ul className="py-20 flex flex-col space-y-7 text-xl">
      {shuffledPosts.slice(0, 5).map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
