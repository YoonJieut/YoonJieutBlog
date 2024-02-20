// app/(pages)/posts/page.tsx
// 해당 페이지는 게시물 목록을 보여주는 페이지입니다.
"use client";
import PostsTable from "./@postsTable/page";
import { useState } from "react";

// todo : 상호작용 이펙트 수정할 필요가 있어보임
export default function PostsPage() {
  const [selectedText, setSelectedText] = useState("| 게시물 분류");

  const handleLiClick = (text: string) => {
    setSelectedText(`| ${text}`);
  };

  return (
    <main className="postsMain flex justify-between h-2/3 ">
      <div className="postsSideBar w-1/3 h-full pl-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">
          {selectedText}
        </h1>
        <ul>
          <li onClick={() => handleLiClick("게시물 파일1")}>게시물 파일1</li>
          <li onClick={() => handleLiClick("게시물 파일2")}>게시물 파일2</li>
          <li onClick={() => handleLiClick("게시물 파일3")}>게시물 파일3</li>
          <li onClick={() => handleLiClick("게시물 파일4")}>게시물 파일4</li>
        </ul>
      </div>
      <PostsTable />
    </main>
  );
}
