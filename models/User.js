// User 테이블 정의
const { Sequelize } = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  user_index: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_pw: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_command: Sequelize.STRING,
  user_admin_status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
