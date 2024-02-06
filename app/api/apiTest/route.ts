// app/api/apiTest/route.ts

import { NextApiRequest, NextApiResponse } from "next";

interface Route {
  req: NextApiRequest;
  res: NextApiResponse;
}
// GET 메서드 처리를 위한 함수
export async function GET({ req, res }: Route) {
  console.log("GET 요청 처리");
  res.status(200).json({ message: "GET 요청에 성공했습니다!" });
}

// 필요한 경우, 다른 HTTP 메서드도 마찬가지로 추가할 수 있습니다.
// 예: POST 요청 처리
// export async function post({ req, res }: Route) {
//   console.log("POST 요청 처리");
//   // POST 요청 처리 로직
//   res.status(200).json({ message: "post 요청에 성공했습니다!" });
// }
