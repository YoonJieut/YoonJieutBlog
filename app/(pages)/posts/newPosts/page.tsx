// app/(pages)/posts/page.tsx
// 해당 페이지는 게시물 목록을 보여주는 페이지입니다.

"use client";

import { useState } from "react";
export default function NewPostsPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const post = {
      title,
      content,
      authorId,
    };

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        // Post created successfully
        console.log("Post created!");
      } else {
        // Error creating post
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <div>
      <h1>게시물</h1>
      <p>게시물을 등록하는 페이지입니다.</p>

      <form onSubmit={handleSubmit}>
        <label className="text-2xl font-bold text-gray-800">
          Title:
          <input
            type="text"
            className="text-zinc-900"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={content}
            className="text-zinc-900"
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-blue-500 border border-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            handleSubmit;
          }}
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
