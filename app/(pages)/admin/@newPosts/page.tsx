// app/(pages)/posts/page.tsx
// 해당 페이지는 게시물 목록을 보여주는 페이지입니다.

"use client";

import { InteractPost } from "@/app/_interfaces/PostTableProps";
import Btn from "@/app/components/Atom/Btn";
import { useState } from "react";

// Props 타입을 정의하여 TypeScript의 타입 체킹 기능을 활용합니다.
interface NewPostsPageProps {
  addEvent: (newPost: InteractPost) => void; // addEvent는 새로운 Post 객체를 매개변수로 받는 함수입니다.
}

export default function NewPostsPage({ addEvent }: NewPostsPageProps) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [authorId, setAuthorId] = useState<number | null>(2);

  const onSubmitButtonEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 새로운 포스트 객체 생성
    const newPost = {
      title,
      content,
      authorId: authorId ?? 2, // authorId가 null이면 기본값으로 2을 사용
    };

    // 부모 컴포넌트의 함수를 호출하여 새 포스트를 추가
    addEvent(newPost);

    // 폼 입력을 초기화
    setTitle("");
    setContent("");
    setAuthorId(2);
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
