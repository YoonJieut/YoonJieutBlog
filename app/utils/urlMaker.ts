/**
 * 엔드 포인트에 해당하는 url을 만들어주는 함수
 *
 * @param endPoint
 * @returns {string} - url
 */
export default function urlMaker(endPoint: string) {
  const url = `http://localhost:3000/${endPoint}`;
  return url;
}
