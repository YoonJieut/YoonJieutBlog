const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Post = sequelize.define("post", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  // 외래키 설정은 관계 정의 시 추가됩니다.
});

module.exports = Post;
