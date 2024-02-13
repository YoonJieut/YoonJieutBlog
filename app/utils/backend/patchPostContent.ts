//app/utils/backend/patchPostContent.ts
// 해당 코드는 postId를 사용하여 해당 게시물의 제목과 내용을 업데이트하는 함수입니다.

import dbQuery from "../dbConnect";

/**
 * 게시물 내용을 업데이트하는 함수입니다.
 *
 * @param {string} postId - 게시물 ID
 * @param {string} title - 업데이트할 제목
 * @param {string} content - 업데이트할 내용
 * @returns {Promise<void>} - Promise 객체
 *
 * @example
 * // 게시물 ID가 '123'인 게시물의 제목을 '새로운 제목'으로, 내용을 '새로운 내용'으로 업데이트합니다.
 * patchPostContent('123', '새로운 제목', '새로운 내용');
 */
const patchPostContent = async (
  postId: string,
  title: string,
  content: string
): Promise<void> => {
  try {
    // postId를 사용하여 해당 행을 검색하고, title과 content를 업데이트
    const updateQuery = `
      UPDATE posts
      SET title = $1, content = $2
      WHERE postId = $3
    `;
    const values = [title, content, postId];
    await dbQuery(updateQuery, values);
    console.log("게시물 내용이 성공적으로 업데이트되었습니다");
  } catch (error) {
    console.error("게시물 내용 업데이트 중 오류 발생:", error);
  }
};

export default patchPostContent;
