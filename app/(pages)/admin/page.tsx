// admin Main태그 페이지

"use client";

import { useState } from "react";
import NewPostsPage from "./@newPosts/page";
import { Post } from "@/app/_interfaces/PostTableProps";
import AdminPostsPage from "./@adminPostsView/page";

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <div className="w-full h-full p-4 flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">메인 페이지</h1>
      <section className="adminMainSection flex w-full h-full gap-4 border border-1 p-4">
        <ul className="w-1/2 h-full flex flex-col space-y-3 ">
          <li className="flex-1 overflow-x-hidden">
            <AdminPostsPage posts={posts} setPosts={setPosts} />
          </li>
        </ul>
        <ul className="w-1/2 h-full flex flex-col space-y-3">
          <li className="outline outline-1 flex-1">
            <NewPostsPage />
          </li>
          <li className="outline outline-1 flex-1"></li>
        </ul>
      </section>
    </div>
  );
}
