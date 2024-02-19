// app/(pages)/admin/@adminPostsPatch/page.tsx
// 해당 페이지는 게시물을 수정하는 페이지입니다.

"use client";

import { useState } from "react";
import { Post } from "@/app/_interfaces/PostTableProps";
import Btn from "@/app/components/Atom/Btn";
import customFetchJSON from "@/app/utils/frontend/customFetchJSON";

export default function PatchPostsPage({ addEvent, selectedPost }) {
  const [patchTitle, setTitle] = useState<string>(selectedPost.title);
  const [patchContent, setContent] = useState<string>(selectedPost.content);

  // 수정된 내용을 서버로 전송하고, 서버로부터 받은 데이터로 상태 업데이트
  const onSubmitButtonEvent = async (
    e: React.FormEvent<HTMLFormElement>,
    addEvent
  ) => {
    e.preventDefault();

    patchToPosts({ selectedPost }, patchTitle, patchContent);
  };

  return (
    <div>
      <h1>게시물</h1>
      <p>게시물을 수정하는 페이지입니다.</p>

      <form onSubmit={onSubmitButtonEvent}>
        <label className="text-2xl font-bold text-gray-800">
          Title:
          <input
            type="text"
            className="text-zinc-900"
            value={patchTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={patchContent}
            className="text-zinc-900"
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br />
        <Btn
          type="submit"
          className="bg-blue-500 border border-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(addEvent) => {
            onSubmitButtonEvent;
          }}
        >
          Fix Post
        </Btn>
      </form>
    </div>
  );
}
