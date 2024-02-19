"use client";

import { PostDataProps } from "@/app/_interfaces/PostTableProps";
import Btn from "@/app/components/Atom/Btn";
import { useEffect, useState } from "react";

interface patchPostContentProps {
  selectedPost: PostDataProps;
  addEvent: (patchTitle: string, patchContent: string) => void;
}

export default function PatchPostsPage({
  selectedPost,
  addEvent,
}: patchPostContentProps) {
  const [tempTitle, setTempTitle] = useState<string>(selectedPost.title);
  const [tempContent, setTempContent] = useState<string>(selectedPost.content);

  // 기존 값이 존재할 때, 다시 바꾸는 useEffect.
  useEffect(() => {
    setTempTitle(selectedPost.title);
    setTempContent(selectedPost.content);
  }, [selectedPost]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempTitle(event.target.value);
    // console.log("event.target.value : ", event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTempContent(event.target.value);
    // console.log("event.target.value : ", event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("handleSubmit 함수 실행");
    addEvent(tempTitle, tempContent);
  };

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleSubmit(event)
      }
    >
      <div>
        <label htmlFor="title">Title:</label>
        <input
          className="text-zinc-900 border border-1 border-black"
          type="text"
          id="title"
          value={tempTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={tempContent}
          onChange={handleContentChange}
          className="text-zinc-900 border border-1 border-black"
        />
      </div>
      <Btn type="submit" className="outline outline-1">
        Update Post
      </Btn>
    </form>
  );
}
