//app/utils/getTableIndexData.ts
// fetch

import dbQuery from "./dbConnect";
import { Request, Response } from "express";
import extractTableAndIndex from "./extractTableAndIndex";
/**
 * 해당 테이블의 모든 데이터를 가져오는 함수
 *
 * @param req
 * @param res
 * @param table {string} 테이블 이름
 * @returns {Promise<Response>} 응답
 */
async function getTableAllData(req: Request, res: Response) {
  const { tableName, id } = extractTableAndIndex(req.url);
  if (!tableName || !id) {
    return res.status(400).json({ message: "Invalid URL structure" });
  }

  try {
    // 파라미터화된 쿼리 사용
    const data = await dbQuery("SELECT * FROM ?? WHERE id = ?", [
      tableName,
      id,
    ]); // 수정된 부분: 쿼리 문자열
    return res.status(200).json(data);
  } catch (error) {
    console.error("Database query error", error);
    return res
      .status(500)
      .json({ message: "Error retrieving data from the database" });
  }
}

export default getTableAllData;
