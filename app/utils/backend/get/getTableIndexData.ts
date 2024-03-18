//app/utils/getTableIndexData.ts
// fetch

import dbQuery from "../../dbConnect";
import { Request, Response } from "express";
import extractTableAndIndex from "../../extractTableAndIndex";

/**
 * 엔드포인트를 기반으로 테이블과 인덱스를 자동으로 참조, 해당 데이터를 가져오는 함수
 * 엔드포인트 예시: /api/테이블이름/인덱스값
 *
 * @param {Request} req - Express의 Request 객체
 * @param {Response} res - Express의 Response 객체
 * @returns {Promise<void>} - 데이터를 가져오는 비동기 함수
 * @throws {Response} - 데이터베이스 쿼리 오류가 발생하면 500 상태 코드로 응답합니다.
 * @ 결과 예시 : { id: 1, name: "John Doe", age: 30 }
 *
 * @의존성 : dbQuery, extractTableAndIndex
 */
async function getTableForIndex(req: Request, res: Response) {
  const result = extractTableAndIndex(req.originalUrl);
  if (result === null) {
    return res
      .status(400)
      .json({ message: "테이블 이름과 인덱스를 추출할 수 없습니다." });
  }

  const { tableName, index } = result;
  try {
    // 파라미터화된 쿼리 사용
    const data = await dbQuery("SELECT * FROM ?? WHERE id = ?", [
      tableName,
      index,
    ]); // 수정된 부분: 쿼리 문자열
    return res.status(200).json(data);
  } catch (error) {
    console.error("Database query error", error);
    return res
      .status(500)
      .json({ message: "Error retrieving data from the database" });
  }
}

export default getTableForIndex;
