//app/utils/backend/patchPostContent.ts
// 해당 코드는 postId를 사용하여 해당 게시물의 제목과 내용을 업데이트하는 함수

import dbQuery from "../../dbConnect";

/**
 * 게시물 내용을 업데이트하는 함수입니다.
 * ! 주의 : 파라미터의 순서에 주의
 *
 * @param {string} title - 업데이트할 제목
 * @param {string} content - 업데이트할 내용
 * @param {string} postId - 게시물 ID
 * @returns {Promise<void>} - Promise 객체
 *
 * @example
 * // 게시물 ID가 '123'인 게시물의 제목을 '새로운 제목'으로, 내용을 '새로운 내용'으로 업데이트합니다.
 * patchPostContent("새로운 제목", "새로운 내용", "123");
 */
const patchPostContent = async (
  title: string,
  content: string,
  postId: string
): Promise<void> => {
  try {
    // postId를 사용하여 해당 행을 검색하고, title과 content를 업데이트
    const updateQuery = `
      UPDATE posts
      SET title = ?, content = ?
      WHERE Id = ?
    `;
    const values = [title, content, postId];
    await dbQuery(updateQuery, values);
    console.log("게시물 내용이 성공적으로 업데이트되었습니다");
  } catch (error) {
    console.error("게시물 내용 업데이트 중 오류 발생:", error);
  }
};

export default patchPostContent;
