// app/utils/postFetchJSON.ts
// 해당 코드는 fetch API를 사용하여 지정된 엔드포인트로 제공된 데이터와 함께 POST 요청을 보내는 함수입니다.

// todo : 이 함수를 공용으로 쓸 수 있는 post로 바꾸는 역할로 바꿀 수 있을 것 같다.
// * post 내용을 담는 함수, 그리고 이 함수를 합치면 어떨까?

/**
 * 지정된 엔드포인트로 제공된 데이터와 함께 POST 요청을 보냅니다.
 * ! 이 함수의 post에 담길 파라미터들은 useState의 값들로 상태를 관리 한 후 넣어줘야 합니다.
 * @param {string} endPoint - 요청을 보낼 엔드포인트입니다.
 * @param {string} title - 게시물의 제목입니다.
 * @param {string} content - 게시물의 내용입니다.
 * @param {number} authorId - 게시물의 작성자 ID입니다.
 * @returns {Promise<void>} - 요청이 완료되면 해결되는 프로미스입니다.
 *
 * @example
 * ```ts
 * postFetchJSON("/api/posts", title, content, authorId);
 * ```
 */
async function postFetchJSON(
  endPoint: string,
  title: string,
  content: string,
  authorId: number
) {
  const post = {
    title,
    content,
    authorId,
  };

  try {
    const response = await fetch(`${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(post),
    });

    if (response.ok) {
      // Post created successfully
      console.log("Post created!");
    } else {
      // Error creating post
      console.error("Failed to create post");
    }
  } catch (error) {
    console.error("An error occurred", error);
  }
}
export default postFetchJSON;
