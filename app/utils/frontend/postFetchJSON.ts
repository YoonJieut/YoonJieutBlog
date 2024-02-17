// app/utils/postFetchJSON.ts
// 해당 코드는 fetch API를 사용하여 지정된 엔드포인트로 제공된 데이터와 함께 POST 요청을 보내는 함수입니다.

// todo : 이 함수를 공용으로 쓸 수 있는 post로 바꾸는 역할로 바꿀 수 있을 것 같다.
// * post 내용을 담는 함수, 그리고 이 함수를 합치면 어떨까?

/**
 * postFetchJSON 함수는 지정된 엔드포인트로 POST 요청을 보내는 함수입니다.
 *
 * @param {string} endPoint - 요청을 보낼 엔드포인트 URL입니다.
 * @param {string} title - 게시물의 제목입니다.
 * @param {string} content - 게시물의 내용입니다.
 * @param {number} authorId - 게시물의 작성자 ID입니다.
 * @returns {Promise<any>} - POST 요청의 응답 데이터를 Promise로 반환합니다.
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
      // 게시물이 성공적으로 생성되었습니다
      console.log("게시물이 생성되었습니다!");
    } else {
      // 게시물 생성 실패
      console.error("게시물 생성에 실패했습니다");
    }
    // todo : main 페이지에서 오류가 나지 않을까?
    // 수정된 데이터를 반환합니다.
    return await response.json();
  } catch (error) {
    console.error("오류가 발생했습니다", error);
  }
}
export default postFetchJSON;
