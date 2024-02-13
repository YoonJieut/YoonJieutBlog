// app/utils/backend/deletePostData.ts
// 해당 함수는 포스트 데이터를 삭제하는 함수입니다.

import dbQuery from "../dbConnect";
import { Request, Response } from "express";

/**
 * 포스트 데이터를 삭제하는 함수입니다.
 *
 * @param {Request} req - Express의 Request 객체
 * @param {Response} res - Express의 Response 객체
 * @param {string | number} postId - 삭제할 포스트의 ID
 * @returns {Promise<void>} - Promise 객체
 *
 * @example
 * deletePostData(req, res, 1);
 */
async function deletePostData(
  req: Request,
  res: Response,
  postId: string | number
) {
  try {
    await dbQuery("DELETE FROM posts WHERE id = ?", [postId]);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete post" });
  }
}

export default deletePostData;
