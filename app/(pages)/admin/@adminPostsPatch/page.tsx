"use client";

import { useEffect, useState } from "react";
import { PostDataProps } from "@/app/_interfaces/dbInterfaces/PostTableProps";
import Btn from "@/app/components/ui/atom/Basic/Btn";
import DetailLine from "@/app/components/ui/design/DetailLine";

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
      className="w-full h-full p-4 flex flex-col space-y-4"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleSubmit(event)
      }
    >
      <h3 className="text-xl font-bold text-blue-500 mb-1 ">Edit Post</h3>
      <DetailLine className="w-12" />
      <div>
        <label htmlFor="title" className="block">
          Title:
        </label>
        <input
          className="text-zinc-900 border border-1 border-black w-2/3 p-1"
          type="text"
          id="title"
          value={tempTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={tempContent}
          onChange={handleContentChange}
          className="text-zinc-900 border border-1 border-black block h-[10rem] overflow-scroll p-1"
        />
      </div>
      <Btn
        type="submit"
        className="border border-zinc-900 px-4 py-2 hover:bg-stone-300 hover:text-zinc-900 duration-200"
      >
        Update Post
      </Btn>
    </form>
  );
}
