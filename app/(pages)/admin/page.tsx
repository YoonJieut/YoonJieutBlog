// admin Main태그 페이지

"use client";

import { useEffect, useState } from "react";
import NewPostsPage from "./@newPosts/page";
import { InteractPost, Post } from "@/app/_interfaces/PostTableProps";
import AdminPostsPage from "./@adminPostsView/page";
import fetchJSON from "@/app/utils/frontend/fetchJSON";
import postFetchJSON from "@/app/utils/frontend/postFetchJSON";
import PatchPostsPage from "./@adminPostsPatch/page";
import customFetchJSON from "@/app/utils/frontend/customFetchJSON";

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  // 작성법에 놀라지 마라, 훅으로 생긴 제네릭과 소괄호의 콜라보

  // 새로운 포스트를 등록하기 위한 상태
  // 컴포넌트에서 수정하면 이것이 발동될 것이다!
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [authorId, setAuthorId] = useState<number>(2);

  // 선택된 li를 식별하기 위한 상태
  // patch 파트에 사용
  const [selectedPost, setSelectedPost] = useState<any>(null);

  // ? 부모에서 등록하고 상태관리하는 함수를 따로 정의하는 이유는 뭘까? = "중앙화"
  // 부모에서 상태를 관리하고, 자식에서는 상태를 변경하는 함수만을 정의하여 부모에서 상태를 변경할 수 있도록 하기 위함이다.

  // ? 그럼 posts만 보내주면 되는 거 아닌가...?

  // 새로운 포스트를 리스트에 추가하는 함수
  const addToPosts = async (
    title: string,
    content: string,
    authorId: number
  ) => {
    try {
      // `await` 키워드를 사용하여 비동기 함수의 결과를 기다림
      await postFetchJSON("/api/posts", title, content, authorId);
      console.log("새로운 Post가 성공적으로 등록되었습니다!");
      // 서버로부터 받은 데이터로 상태 업데이트
      await fetchJSON("/api/posts")
        .then((data) => setPosts(data))
        .then(() => {
          console.log("posts : ", posts);
        });
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
            <AdminPostsPage
              posts={posts}
              setPosts={setPosts}
              setSelectedPost={setSelectedPost}
            />
          </li>
        </ul>
        <ul className="w-1/2 h-full flex flex-col space-y-3">
          <li className="outline outline-1 flex-1 flex justify-center items-center">
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
          <li className="outline outline-1 flex-1 flex justify-center items-center">
            {selectedPost === null ? (
              <p>리스트에서 선택해주세요</p>
            ) : (
              <PatchPostsPage />
            )}
          </li>
        </ul>
      </section>
    </div>
  );
}
