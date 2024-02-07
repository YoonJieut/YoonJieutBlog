import express, { Request, Response } from "express";
import next from "next";
// import path from "path";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Next.js 애플리케이션을 실행하기 전에 필요한 준비 작업을 수행하는 역할
// Next.js 라우팅 시스템을 설정하고 필요한 데이터를 미리 가져오는 등의 작업을 수행합니다

app.prepare().then(() => {
  const server = express();
  console.log("server.ts 시작");

  // Express에서 처리할 API 라우트 예시
  server.get("/api/hello", (req: Request, res: Response) => {
    res.json({ message: "Hello, World!" });
  });

  // 모든 든 HTTP 요청 메서드에 대해 미들웨어 함수를 등록하는 데 사용되는 .all() 메서드
  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
