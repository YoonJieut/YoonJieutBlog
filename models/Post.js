const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Post = sequelize.define("post", {
  post_index: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  post_title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  post_content: Sequelize.TEXT,
  post_create_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  post_update_at: Sequelize.DATE,
  // user_index 필드는 관계 설정 시 추가됩니다.
});

module.exports = Post;
