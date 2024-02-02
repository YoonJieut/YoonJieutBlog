// models/post.js
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init(
    {
      post_index: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      post_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // 속성 정의...
      user_index: {
        type: DataTypes.INTEGER,
        references: {
          model: "users", // 'Users'는 User 모델의 modelName과 일치해야 합니다.
          key: "user_index",
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );

  return Post;
};
