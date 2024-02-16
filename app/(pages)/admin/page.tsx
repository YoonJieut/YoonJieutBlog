// admin Main태그 페이지

"use client";

import { useEffect, useState } from "react";
import NewPostsPage from "./@newPosts/page";
import { Post } from "@/app/_interfaces/PostTableProps";
import AdminPostsPage from "./@adminPostsView/page";
import fetchJSON from "@/app/utils/frontend/fetchJSON";
import postFetchJSON from "@/app/utils/frontend/postFetchJSON";

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, content, authorId] = posts;

  // ? 부모에서 등록하고 상태관리하는 함수를 따로 정의하는 이유는 뭘까? = "중앙화"
  // 부모에서 상태를 관리하고, 자식에서는 상태를 변경하는 함수만을 정의하여 부모에서 상태를 변경할 수 있도록 하기 위함이다.
  const addToPosts = async (newPost: Post) => {
    // 서버 데이터 등록
    // 인자는 4개가 필요하다. (endpoint, title, content, authorId)
    // postFetchJSON("/api/posts", title, content, authorId);
    // 리스트 상태 업데이트
    // setPosts([...posts, newPost]);
  };

  // 기존 게시물 목록을 불러오는 함수
  useEffect(() => {
    fetchJSON("/api/posts")
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

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
            <NewPostsPage addEvent={addToPosts} />
          </li>
          <li className="outline outline-1 flex-1"></li>
        </ul>
      </section>
    </div>
  );
}
