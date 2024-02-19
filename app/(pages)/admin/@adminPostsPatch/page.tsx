// app/(pages)/posts/page.tsx
// 해당 페이지는 게시물 목록을 보여주는 페이지입니다.

"use client";

import {
  Post,
  PostAuthorIdProps,
  PostContentProps,
  PostTitleProps,
} from "@/app/_interfaces/PostTableProps";
import Btn from "@/app/components/Atom/Btn";
import postFetchJSON from "@/app/utils/frontend/postFetchJSON";
import { useState } from "react";

// Props 타입을 정의하여 TypeScript의 타입 체킹 기능을 활용합니다.
interface PatchPostsPageProps {
  addEvent: (newPost: Post) => void; // addEvent는 새로운 Post 객체를 매개변수로 받는 함수입니다.
}

export default function PatchPostsPage({ addEvent }: PatchPostsPageProps) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [authorId, setAuthorId] = useState<number | null>(2);

  const onSubmitButtonEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. input의 값을 모두 가져와 객체에 저장합니다. (state를 활용)
    const updatedPost = {
      title,
      content,
      authorId,
    };

    // 2. fetchAPI를 활용해서 patch 방식으로 body에 담아 보낸다.
    try {
      const response = await fetch("/api/posts", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      });

      if (response.ok) {
        // 성공적으로 업데이트된 게시물을 추가합니다.
        addEvent(updatedPost);
        // 업데이트 후에는 입력 필드를 초기화합니다.
        setTitle("");
        setContent("");
        setAuthorId(null);
      } else {
        // 업데이트에 실패한 경우, 오류 메시지를 처리합니다.
        const errorData = await response.json();
        console.error("Failed to update post:", errorData);
      }
    } catch (error) {
      console.error("Failed to update post:", error);
    }
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
        <Btn
          type="submit"
          className="bg-blue-500 border border-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            onSubmitButtonEvent;
          }}
        >
          게시물 등록하기
        </Btn>
      </form>
    </div>
  );
}
