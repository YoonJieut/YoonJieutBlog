// app/(pages)/posts/[postId]/page.tsx
// 해당 컴포넌트는 게시물 상세 페이지를 구성합니다.
// 목표 : ssr 방식으로 작성해본다.

import fetchJSON from "@/app/utils/fetchJson";
import urlMaker from "@/app/utils/urlMaker";

// todo1. : url 파라미터로 게시물 ID를 받아 해당 게시물을 조회합니다.
// todo2. : 게시물 조회 API를 호출합니다.
// todo3. : 게시물 정보를 표시합니다.

export default async function PostDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await fetchJSON(urlMaker(`/api/posts/${postId}`));
  console.log("post : ", post);

  return (
    <>
      <h1>testing : {postId}</h1>
      <h2>{post[0].title}</h2>
      <p>{post[0].content}</p>
      <p>Author ID: {post[0].authorId}</p>
    </>
  );
}
