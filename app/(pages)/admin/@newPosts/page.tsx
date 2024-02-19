// app/(pages)/posts/page.tsx
// 해당 페이지는 게시물 목록을 보여주는 페이지입니다.
"use client";

import {
  InteractPost,
  NewPostsPageProps,
  NewPostsPageProps1,
} from "@/app/_interfaces/PostTableProps";
import Btn from "@/app/components/Atom/Btn";

const NewPostsPage: React.FC<NewPostsPageProps1> = ({
  addEvent,
  title,
  content,
  setTitle, // setTitle 매개변수 추가
  setContent, // setContent 매개변수 추가
}) => {
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value); // title 상태 업데이트
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value); // content 상태 업데이트
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPost: InteractPost = {
      title,
      content,
      authorId: 2,
    };
    addEvent(newPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          className="text-zinc-900 border border-1 border-black"
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          className="text-zinc-900 border border-1 border-black"
        />
      </div>
      <Btn type="submit" className="outline outline-1">
        Add Post
      </Btn>
    </form>
  );
};

export default NewPostsPage;
