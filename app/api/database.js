const Sequelize = require("sequelize");

// Sequelize 초기화
const sequelize = new Sequelize("test2", "postgres", "root", {
  dialect: "postgres", // 사용하는 데이터베이스 종류
  host: "localhost", // 데이터베이스 호스트
});
export default sequelize; // sequelize 객체를 내보냄
