// app/(pages)/posts/page.tsx
// 해당 페이지는 게시물 목록을 보여주는 페이지입니다.

"use client";

import postFetchJSON from "@/app/utils/postFetchJSON";
import { useState } from "react";
export default function NewPostsPage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [authorId, setAuthorId] = useState<number>(1);

  const onSubmitButtonEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postFetchJSON("/api/posts", title, content, authorId);
  };

  return (
    <div>
      <h1>게시물</h1>
      <p>게시물을 등록하는 페이지입니다.</p>

      <form onSubmit={onSubmitButtonEvent}>
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
            onSubmitButtonEvent;
          }}
        >
          게시물 등록하기
        </button>
      </form>
    </div>
  );
}
