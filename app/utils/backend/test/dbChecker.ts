import dbQuery from "../../dbConnect";
import { Request, Response } from "express";

async function dbChecker(req: Request, res: Response) {
  try {
    // 데이터베이스 연결 테스트를 위해 1을 SELECT 합니다.
    const result = await dbQuery("SELECT 1");
    res.json({
      success: true,
      message: "DB 연결에 성공했습니다.",
      result,
    });
  } catch (error) {
    console.error("Database connection error : ", error);
    res
      .status(500)
      .json({ success: false, message: "!! DB 연결에 실패했습니다.", error });
  }
}
export default dbChecker;
