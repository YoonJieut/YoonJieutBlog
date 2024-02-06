import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";

/**
 *     {
      user_index: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_pw: {
        type: DataTypes.STRING,
        allowNull: false,
      },
 */

async function createUser(userId: string, userPw: string) {
  try {
    const newUser = await User.create({
      user_id: userId,
      user_pw: userPw,
    });
    console.log("새로운 사용자 생성 성공:", newUser);
  } catch (error) {
    console.error("사용자 생성 중 오류 발생:", error);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const user = await createUser("testId", "testPw");
      if (user !== null) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
