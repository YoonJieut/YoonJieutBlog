// 파일 경로 :  app/utils/database.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres", // 사용하는 데이터베이스 유형
  host: "localhost",
  port: 5432, // Change the port value to a number
  database: "yoonjieut_blog",
  username: "postgres",
  password: "root",
});

export default sequelize;
