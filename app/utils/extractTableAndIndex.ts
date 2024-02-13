//app/utils/extractTableAndIndex.ts
// URL에서 테이블 이름과 ID를 추출하는 함수입니다.

/**
 * URL에서 테이블 이름과 ID를 추출하는 함수입니다.
 *
 * @param url 추출할 정보가 포함된 URL입니다.
 * @returns 테이블 이름과 ID를 포함하는 객체입니다.
 * 추출에 실패한 경우 null을 반환합니다.
 * @example
 * const url = "/api/posts/1";
 * const result = extractTableAndId(url);
 * console.log(result); // { tableName: "posts", index: "1" } 출력
 */
const extractTableAndIndex = (url: string) => {
  const regex = /\/api\/([^\/]+)\/([^\/]+)/;
  const match = url.match(regex);
  return match ? { tableName: match[1], index: match[2] } : null;
};

export default extractTableAndIndex;
