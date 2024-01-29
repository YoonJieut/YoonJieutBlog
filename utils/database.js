"use client";
// app/utils/database.js
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
  port: "5432",
  database: "yoonjieut_blog",
  username: "postgres",
  password: "root",
});

// 시퀄라이즈 인증, 확인 코드
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
