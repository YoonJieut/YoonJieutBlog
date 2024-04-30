import { Data } from "@/app/_interfaces/dbInterfaces/DataAnyType";

/**
 * 지정된 엔드포인트로 요청을 보내고 JSON 데이터를 가져오는 함수입니다.
 * patch, post과 같이 body가 필요한 경우 사용
 *
 * @param endPoint - 요청을 보낼 엔드포인트 URL입니다.
 * @param method - 요청의 HTTP 메서드입니다.
 * @param data - 요청에 포함할 데이터입니다.
 * @returns Promise 객체로서, 성공적으로 가져온 JSON 데이터를 반환합니다.
 *
 * @example
 * // 예제: 게시물 생성 요청 보내기
 * const endPoint = "https://api.example.com/posts";
 * const method = "POST";
 * const data = {
 *   title: "New Post",
 *   content: "This is the content of the new post."
 * };
 * const response = await customFetchJSON(endPoint, method, data);
 * console.log(response); // 출력: 생성된 게시물의 JSON 데이터
 */

async function customFetchJSON(endPoint: string, method: string, data: Data) {
  try {
    const response = await fetch(`${endPoint}`, {
      method: `${method}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
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
export default customFetchJSON;
