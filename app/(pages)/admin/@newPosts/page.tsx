// app/(pages)/posts/page.tsx
// 해당 페이지는 게시물 목록을 보여주는 페이지입니다.
"use client";

import { NewPostsPageProps } from "@/app/_interfaces/dbInterfaces/PostTableProps";
import Btn from "@/app/components/ui/atom/Basic/Btn";
import DetailLine from "@/app/components/ui/design/DetailLine";

const NewPostsPage: React.FC<NewPostsPageProps> = ({
  addEvent,
  title,
  content,
  authorId,
  setTitle, // setTitle 매개변수 추가
  setContent, // setContent 매개변수 추가
}) => {
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value); // title 상태 업데이트
  };

  function handleContentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setContent(event.target.value); // content 상태 업데이트
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    title: string,
    content: string,
    authorId: number
  ) => {
    event.preventDefault();
    addEvent(title, content, authorId);
    // form 초기화
    setTitle(""); // title 초기화
    setContent(""); // content 초기화
  };

  return (
    <form
      className="w-full h-full p-4 flex flex-col space-y-4"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleSubmit(event, title, content, authorId)
      }
    >
      <h3 className="text-xl font-bold text-blue-500 mb-1">New Posts</h3>
      <DetailLine className="w-12" />
      <div className="w-full">
        <label htmlFor="title" className="block">
          Title :
        </label>
        <input
          className="text-zinc-900 border border-1 border-black w-2/3 p-1"
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          className="text-zinc-900 border border-1 border-black block h-[10rem] overflow-scroll p-1"
        />
      </div>
      <Btn
        type="submit"
        className="border border-zinc-900 px-4 py-2 hover:bg-stone-300 hover:text-zinc-900 duration-200"
      >
        Add Post
      </Btn>
    </form>
  );
};

export default NewPostsPage;
