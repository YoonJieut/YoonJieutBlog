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
        <li key={post.id} className="flex space-x-4">
          {shuffleArray([post.title, post.content, post.authorId]).map(
            (item, index) => {
              // 섞은 배열들을 span으로 감싸면서 스타일링을 적용
              let style = {};
              if (typeof item === "string") {
                if (item === post.title) {
                  style = { fontWeight: "bold" };
                } else if (item === post.content) {
                  style = {
                    fontSize: "0.9rem",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  };
                }
              } else if (item === post.authorId) {
                style = { fontStyle: "italic", fontSize: "0.9rem" };
              }
              // map에 대한 리턴값
              return (
                <span
                  key={index}
                  style={style}
                  className="outline outline-1 p-2"
                >
                  {item === post.authorId
                    ? item === 1
                      ? "작성자 : Admin"
                      : "작성자 : User"
                    : item}
                </span>
              );
            }
          )}
        </li>
      ))}
    </ul>
  );
}
