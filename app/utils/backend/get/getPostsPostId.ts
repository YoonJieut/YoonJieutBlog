/**
 * postId를 기반으로 서버에서 게시물을 가져옵니다.
 * @param {string} postId - 가져올 게시물의 ID입니다. useRouter와 query를 활용하는 것을 전재로 되어있습니다.
 * @returns {Promise<any>} - 가져온 게시물 데이터를 해결하는 프로미스입니다.
 * @example
 * const router = useRouter();
 * const postId = router.query;
 * ...
 *
 * const post = fetchPost(postId);
 * console.log(post);
 * // { id: "1", title: "Hello, World!", content: "This is my first post!", authorId: "1" }
 */
export const fetchPost = async (postId: string | string[] | undefined) => {
  try {
    const response = await fetch(`http://localhost/api/posts/${postId}`);
    const data = await response.json();
    console.log("data : ", data);
    console.log("data 타입 : ", typeof data);
    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
  }
};
