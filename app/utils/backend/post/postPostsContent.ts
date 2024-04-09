// app/utils/backend/postPostsContent.ts
// 해당 코드는 게시물 내용을 등록하는 함수입니다.

import dbQuery from "../../dbConnect";
import { Request, Response } from "express";

/**
 * 게시물 내용을 생성하는 함수입니다.
 *
 * @param {Request} req - 요청 객체
 * @param {Response} res - 응답 객체
 * @returns {Promise<void>} - Promise 객체
 *
 * @example
 * postPostsContent(req, res);
 */
async function postPostsContent(req: Request, res: Response) {
  // 요청 본문에서 title, content, authorId를 추출합니다.
  const { title, content, authorId } = req.body;
  try {
    await dbQuery(
      "INSERT INTO posts (title, content, authorId) VALUES (?, ?, ?)",
      [title, content, authorId]
    );
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    console.error("Database insert error", error);
    res
      .status(500)
      .json({ message: "Error creating a new post in the database" });
  }
}
export default postPostsContent;
