import dbQuery from "./dbConnect";
import { Request, Response } from "express";

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
