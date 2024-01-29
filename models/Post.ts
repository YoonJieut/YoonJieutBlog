const sequelize = require("../utils/database");

const Post = sequelize.define("post", {
  post_index: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  post_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  post_content: DataTypes.TEXT,
  post_create_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  post_update_at: DataTypes.DATE,
  // user_index 필드는 관계 설정 시 추가됩니다.
});

module.exports = Post;
