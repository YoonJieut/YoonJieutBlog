import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostsHeader() {
  return (
    <div className="PostsHeader p-4 h-1/3 w-full flex flex-col items-start justify-center">
      <p>저의 블로그 게시물입니다.</p>
      <div className="flex space-x-2 font-bold font-serif text-7xl">
        <span className="text-sm">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </span>
        <h1>Never forget, posts for memo</h1>
        <span className="text-sm">
          <FontAwesomeIcon icon={faQuoteRight} />
        </span>
      </div>
    </div>
  );
}
