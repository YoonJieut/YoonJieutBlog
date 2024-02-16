// app/(pages)/posts/page.tsx
// 해당 페이지는 게시물 목록을 보여주는 페이지입니다.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostsTable from "./@postsTable/page";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default function PostsPage() {
  return (
    <div className="postRoot w-screen h-screen">
      <div className="PostsHeader p-4 h-1/3 w-full flex flex-col items-start justify-center">
        <p>저의 블로그 게시물입니다.</p>
        <div className="flex space-x-2 font-bold font-serif text-5xl">
          <span className="text-sm">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </span>
          <h1>Never forget, posts for memo</h1>
          <span className="text-sm">
            <FontAwesomeIcon icon={faQuoteRight} />
          </span>
        </div>
      </div>
      <main className="postsMain flex justify-between h-2/3 ">
        <div className="postsSideBar w-1/3 h-full pl-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-5">
            | 게시물 분류
          </h1>
          <ul>
            <li>게시물 파일1</li>
            <li>게시물 파일2</li>
            <li>게시물 파일3</li>
            <li>게시물 파일4</li>
          </ul>
        </div>
        <PostsTable />
      </main>
    </div>
  );
}
