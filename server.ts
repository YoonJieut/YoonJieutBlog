import express, { Request, Response } from "express";
import next from "next";
// import path from "path";
import mysql from "mysql";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
//app.use(app.getRequestHandler()); 이것도 가능하다.
// * getRequestHandler() 함수는 Next.js 프레임워크에서 제공되는 함수로, Next.js 애플리케이션의 라우팅 및 페이지 처리를 담당합니다. 이 함수는 Express 애플리케이션과 함께 사용될 때, Express의 미들웨어로 동작하여 Next.js의 라우팅을 처리합니다.

const db = mysql.createPool({
  host: "localhost",
  user: "yourUsername",
  password: "yourPassword",
  database: "yourDatabase",
});

// * 서버 라우팅 로직 규칙
// 1.  API 경로와 페이지 경로를 명확히 구분하고, API 라우트는 주로 /api/ 경로 아래에 위치시키는 것이 일반적이다.
// 2. Express 서버에서 CORS 정책을 설정하여, 클라이언트 사이드 애플리케이션의 요청을 안전하게 처리할 수 있도록 해야 합니다.

// * app.prepare() 함수는 Next.js 애플리케이션을 실행하기 전에 필요한 준비 작업을 수행하는 역할을 합니다.
// Next.js 라우팅 시스템을 설정하고 필요한 데이터를 미리 가져오는 등의 작업을 수행합니다.
app.prepare().then(() => {
  const server = express();
  server.use(express.json()); // JSON 요청 본문 파싱을 위해 express.json() 미들웨어를 사용합니다.
  console.log("server.ts 시작");

  // Express에서 처리할 API 라우트 예시
  // server는 nextjs에서 제공하는 서버 인스턴스라고 한다.
  server.get("/api/hello", (req: Request, res: Response) => {
    console.log("api/hello 요청");
    res.json({ message: "Hello, World!" });
  });

  // 사용자 목록 조회 API
  server.get("/api/users", (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
      if (err) return res.status(500).send("Server error");
      res.status(200).json(results);
    });
  });

  // 포스트 생성 API
  server.post("/api/posts", (req, res) => {
    const { title, content, authorId } = req.body;
    const query =
      "INSERT INTO posts (title, content, authorId) VALUES (?, ?, ?)";
    db.query(query, [title, content, authorId], (err, results) => {
      if (err) return res.status(500).send("Server error");
      res.status(201).json({ message: "Post created successfully" });
    });
  });

  // 나머지 모든 요청은 Next.js 핸들러로 전달
  // 모든 HTTP 요청 메서드에 대해 미들웨어 함수를 등록하는 데 사용되는 .all() 메서드
  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
