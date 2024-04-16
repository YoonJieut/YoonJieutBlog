// 이 함수는 url의 마지막 slut을 반환 합니다.

/**
 * URL 파라미터를 추출하는 함수입니다.
 *
 * @param url 추출할 URL 문자열
 * @returns URL 파라미터
 *
 * @example
 * ```typescript
 * const url = "https://example.com/products/123";
 * const param = urlParamMaker(url);
 * console.log(param); // Output: "123"
 * ```
 */
function urlParamMaker(url: string) {
  const urlParam = url.split("/").pop()?.toLowerCase();
  return urlParam;
}
export default urlParamMaker;
