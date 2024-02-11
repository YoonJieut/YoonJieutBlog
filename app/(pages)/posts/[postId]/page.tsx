// app/(pages)/posts/[postId]/page.tsx
// 해당 컴포넌트는 게시물 상세 페이지를 구성합니다.
// 목표 : ssr 방식으로 작성해본다.

// todo1. : url 파라미터로 게시물 ID를 받아 해당 게시물을 조회합니다.
// todo2. : 게시물 조회 API를 호출합니다.
// todo3. : 게시물 정보를 표시합니다.

async function getPostsPostId(postId: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`); // Modify the fetch URL to include the full API endpoint
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.error("Error fetching post:", res.status, res.statusText);
  }
  return res.json();
}

export default async function PostDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getPostsPostId(postId);
  console.log("post : ", post);
  /**
   * [
      {
        id: 1,
        title: 'First Post',
        content: 'This is the content of the first post.',
        authorId: 1,
        createdAt: '2024-02-07T06:46:17.000Z'
      }
    ]
   */
  return (
    <>
      <h1>testing : {postId}</h1>
      <h2>{post[0].title}</h2>
      <p>{post[0].content}</p>
      <p>Author ID: {post[0].authorId}</p>
    </>
  );
}
