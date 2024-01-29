// app/api/posts.js

import Post from "@/models/Post";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const posts = await Post.findAll();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: "전송 실패했습니다." });
    }
  } else if (req.method === "POST") {
    // 게시물 생성 로직
    const { title, content, userId } = req.body;
    try {
      const newPost = await Post.create({ title, content, userId });
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
  // 기타 HTTP 메서드 처리
}
