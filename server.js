const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Next.js 애플리케이션을 실행하기 전에 필요한 준비 작업을 수행하는 역할
// Next.js 라우팅 시스템을 설정하고 필요한 데이터를 미리 가져오는 등의 작업을 수행합니다

app.prepare().then(() => {
  const server = express();
  console.log("server.js 시작");
  // 여기에 express 미들웨어와 라우트를 설정합니다.

  // 모든 든 HTTP 요청 메서드에 대해 미들웨어 함수를 등록하는 데 사용되는 .all() 메서드
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.get("/api/hello", (req, res) => {
    res.json({ message: "Hello, World!" });
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
