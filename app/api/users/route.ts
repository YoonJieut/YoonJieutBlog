import { NextRequest, NextResponse } from "next/server";
import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../../lib/users/usersController";

export default function handler(req: NextRequest, res: NextResponse) {
  // 사용자 생성 함수
  if (req.method === "POST") {
    const { user_id, user_pw } = req.body;
    createUser(req, res);
  }
  // 모든 사용자 조회 함수
  else if (req.method === "GET") {
    getAllUsers(req, res);
  }
  // 사용자 정보 수정 함수
  else if (req.method === "PUT") {
    const { id } = req.params;
    const { user_id, user_pw } = req.body;
    updateUser(req, res);
  }
  // 사용자 삭제 함수
  else if (req.method === "DELETE") {
    const { id } = req.params;
    deleteUser(req, res);
  } else {
    res.status(405).end();
  }
}
