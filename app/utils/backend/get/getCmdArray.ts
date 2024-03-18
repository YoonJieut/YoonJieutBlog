import { Request, Response } from "express";
import dbQuery from "../../dbConnect";

const getAdminCommands = async (req: Request, res: Response) => {
  /**
   * 관리자 명령어를 가져오는 함수입니다.
   * @returns {Promise<string[]>} - 관리자 명령어를 가져오는 Promise 객체
   * @example
   * // 사용 예시
   * getAdminCommands()
   *   .then((results) => {
   *     console.log(results);
   *   })
   *   .catch((error) => {
   *     console.error(error);
   *   });
   */
  try {
    const query = "SELECT adminCmd FROM commands";
    //  형 변환(타입 캐스팅) 문법을 사용하여 결과를 string[]으로 변환합니다.
    const results = (await dbQuery(query)) as { adminCmd: string }[];
    const adminCommands = results.map(
      (result: any) => result.adminCmd
    ) as string[];
    res.status(200).json(adminCommands);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "어드민 커맨드를 가져오는데 실패 했습니다." });
  }
};
export default getAdminCommands;
