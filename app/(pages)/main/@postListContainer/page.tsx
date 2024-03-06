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
import PostItem from "@/app/components/ui/Molecules/Lists/PostItem";
import DetailLine from "@/app/components/ui/Molecules/Etc/DetailLine";
import Link from "next/link";

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
    <section className="PostListsContainer flex flex-col space-y-4 py-40">
      <div className="titleArea w-1/6">
        <h1 className="font-serif text-4xl">
          <Link href="/posts">Random Posts</Link>
        </h1>
        <DetailLine className="w-1/12" />
      </div>
      <ul className=" flex flex-col space-y-7 text-xl">
        {shuffledPosts.slice(0, 5).map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <PostItem post={post} />
          </Link>
        ))}
      </ul>
    </section>
  );
}
