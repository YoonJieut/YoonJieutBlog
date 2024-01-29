// 파일 경로 : models/User.js
// User 테이블 정의
const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  user_index: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_pw: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_command: DataTypes.STRING,
  user_admin_status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
