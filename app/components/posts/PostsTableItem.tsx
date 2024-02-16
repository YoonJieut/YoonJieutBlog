import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

interface PostsTableProps {
  post: Post;
}
// Todo : 버튼 대신 아이콘을 넣든가 혹은 날짜로 수정한다.
// Todo : id대신 나중에 이미지로 만든다.
const PostsTableItem: React.FC<PostsTableProps> = ({ post }) => {
  return (
    <li key={post.id} className="border-t border-t-zinc-900 text-left">
      <Link
        href={`/posts/${post.id}`}
        key={post.id}
        className="flex justify-between items-start gap-2 leading-6 pt-2"
      >
        <div className="w-1/12">{post.id}.</div>
        <div className="w-1/3 font-bold hover:underline text-2xl">
          {post.title}
        </div>
        <div className="w-full">{post.content}</div>
        <div className="w-1/4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go
          </button>
        </div>
      </Link>
    </li>
  );
};

export default PostsTableItem;
