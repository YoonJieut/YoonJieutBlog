// app/(pages)/posts/page.tsx
// 해당 페이지는 게시물 목록을 보여주는 페이지입니다.
"use client";
import PostTitle from "@/app/components/ui/design/PostTitle";
import PostsTable from "./@postsTable/page";
// import { useState } from "react";

// todo : 상호작용 이펙트 수정할 필요가 있어보임
export default function PostsPage() {
  // const [selectedText, setSelectedText] = useState("| 게시물 분류");

  // const handleLiClick = (text: string) => {
  //   setSelectedText(`| ${text}`);
  // };

  return (
    <main className="postsMain w-full h-full flex justify-between bg-main overflow-hidden mb-[10px]">
      <div className="w-5/12 OutLine">
        <PostTitle />
      </div>
      <div className="w-7/12 pt-5">
        <PostsTable />
      </div>
    </main>
  );
}
