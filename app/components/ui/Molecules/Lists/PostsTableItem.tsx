import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

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
    <li
      key={post.id}
      className="border-t border-sub-1 text-left text-[14px] leading-tight"
    >
      <Link
        href={`/posts/${post.id}`}
        key={post.id}
        className="flex justify-between items-start gap-2 leading-6 pt-2"
      >
        <div className="w-1/12">{post.id}.</div>
        <div className="w-1/3 hover:underline">{post.title}</div>
        <div className="w-full leading-tight text-[13px]">{post.content}</div>
        <div className="w-1/4 flexCenter">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-3 rounded border border-sub-1"
            title="Go to Post"
          >
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#c1c1c1" }} />
          </button>
        </div>
      </Link>
    </li>
  );
};

export default PostsTableItem;
