import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// 데이터베이스 연결 풀을 사용하여 쿼리를 실행하는 함수
const dbQuery = (query: string, values?: any[]) => {
  return new Promise((resolve, reject) => {
    pool.query(query, values, (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
};

export default dbQuery;
