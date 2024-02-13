// app/(pages)/posts/page.tsx
// 해당 페이지는 게시물 목록을 보여주는 페이지입니다.
import PostsTable from "./@postsTable/page";

export default function PostsPage() {
  return (
    <div>
      <h1>게시물</h1>
      <p>게시물 페이지입니다.</p>
      <PostsTable />
    </div>
  );
}
