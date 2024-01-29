// 파일 경로 :  app/utils/database.js
import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
// dotenv.config();

// const sequelize = new Sequelize(
//   process.env.DB_CONNECTION_STRING ||
//     "postgres://postgres:root@localhost:5432/yoonjieut_blog"
// );

//* DB 연결
// const sequelize = new Sequelize("database", "username", "password", {
//   host: "localhost",
//   dialect: "postgres", // 사용하는 데이터베이스 유형
// });

const sequelize = new Sequelize({
  dialect: "postgres", // 사용하는 데이터베이스 유형
  host: "localhost",
  port: 5432, // Change the port value to a number
  database: "yoonjieut_blog",
  username: "postgres",
  password: "root",
});

export default sequelize;
