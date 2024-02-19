// admin Main태그 페이지

"use client";

import { useEffect, useState } from "react";
import NewPostsPage from "./@newPosts/page";
import { InteractPost, Post } from "@/app/_interfaces/PostTableProps";
import AdminPostsPage from "./@adminPostsView/page";
import fetchJSON from "@/app/utils/frontend/fetchJSON";
import postFetchJSON from "@/app/utils/frontend/postFetchJSON";

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  // 새로운 포스트를 등록하기 위한 상태
  // 컴포넌트에서 수정하면 이것이 발동될 것이다!
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [authorId, setAuthorId] = useState<number>(2);

  // ? 부모에서 등록하고 상태관리하는 함수를 따로 정의하는 이유는 뭘까? = "중앙화"
  // 부모에서 상태를 관리하고, 자식에서는 상태를 변경하는 함수만을 정의하여 부모에서 상태를 변경할 수 있도록 하기 위함이다.

  // 새로운 포스트를 리스트에 추가하는 함수
  const addToPosts = async (newPost: InteractPost) => {
    try {
      const { title, content, authorId } = newPost;
      // `await` 키워드를 사용하여 비동기 함수의 결과를 기다림
      const createdPost = await postFetchJSON(
        "/api/posts",
        title,
        content,
        authorId
      );
      // 서버로부터 받은 데이터로 상태 업데이트
      setPosts((prevPosts) => [...prevPosts, createdPost]);
    } catch (error) {
      console.error("Post 등록 중 오류가 발생했습니다:", error);
    }
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
            <NewPostsPage
              addEvent={addToPosts}
              title={title}
              content={content}
              authorId={authorId}
              setTitle={setTitle}
              setContent={setContent}
              setAuthorId={setAuthorId}
            />
          </li>
          <li className="outline outline-1 flex-1"></li>
        </ul>
      </section>
    </div>
  );
}
