// 경로 : app/utils/frontend/deleteFetchJSON.ts
// 이 파일은 클라이언트에서 지정된 엔드포인트에서 ID에 해당하는 데이터를 삭제하는 함수를 내보냅니다.

/**
 * 지정된 엔드포인트에서 ID에 해당하는 데이터를 삭제하는 함수입니다.
 * @param {string} endPoint - 엔드포인트 URL
 * @param {string | number} id - 삭제할 데이터의 ID
 * @returns {Promise<void>} - 삭제 작업의 결과를 나타내는 Promise 객체
 *
 * @example
 * // 게시물의 ID가 1인 데이터를 삭제하는 예시
 * await deleteFetchJSON("/api/posts", 1);
 */
async function deleteFetchJSON(
  endPoint: string,
  id: string | number
): Promise<void> {
  // 입력 유효성 검사
  if (!endPoint || !id) {
    console.error("유효하지 않은 endPoint 또는 id입니다.");
    return;
  }

  try {
    const response = await fetch(`${endPoint}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    // fetch 요청이 실패한 경우 예외를 throw
    if (!response.ok) {
      throw new Error("게시물 삭제에 실패했습니다");
    }

    // 게시물이 성공적으로 삭제되었습니다
    console.log(`ID ${id}의 게시물이 성공적으로 삭제되었습니다!`);
  } catch (error) {
    // 오류 처리
    console.error("게시물 삭제 중 오류가 발생했습니다:", error);
  }
}

export default deleteFetchJSON;
