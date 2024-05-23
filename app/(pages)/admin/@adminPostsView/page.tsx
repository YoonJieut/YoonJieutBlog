"use client";

import DetailLine from "@/app/components/ui/design/DetailLine";
import { Post } from "@/app/_interfaces/dbInterfaces/PostTableProps";
import Btn from "@/app/components/ui/atom/Basic/Btn";
import deleteFetchJSON from "@/app/utils/frontend/fetch/deleteFetchJSON";

export default function AdminPostsPage({
  posts,
  setPosts,
  setSelectedPost,
}: {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  setSelectedPost: React.Dispatch<React.SetStateAction<Post>>;
}) {
  const handleDelete = async (postId: number) => {
    console.log("삭제 버튼 클릭 - postId : ", postId);
    try {
      await deleteFetchJSON("/api/posts", postId);
      console.log(`ID가 ${postId}인 게시물이 성공적으로 삭제되었습니다!`);
      // post 배열 상태 업데이트 (콜백함수로 해당 id를 제외한 배열을 반환)
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("게시물 삭제 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <div className="adminPostsView">
      <h3 className="text-xl font-bold text-blue-500 mb-5">Post Lists</h3>
      <DetailLine className="w-12" />
      <ul className="adminPostUl flex flex-col space-y-2">
        {posts.map((post, index) => (
          <li
            key={index}
            className="flex w-full justify-between leading-tight gap-2"
          >
            <span
              className="cursor-pointer contentPart flex space-x-4"
              onClick={() => {
                setSelectedPost(post);
                console.log("선택된 포스트 : ", post);
              }}
            >
              <h2 className="overflow-hidden overflow-ellipsis">
                {post.title}
              </h2>
              <p>|</p>
              <p className="text-[14px]">{post.content}</p>
            </span>
            <Btn onClick={() => handleDelete(post.id)}>Delete</Btn>
          </li>
        ))}
      </ul>
    </div>
  );
}
