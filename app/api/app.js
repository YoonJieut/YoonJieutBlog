// 파일 경로 : models/app.js
// 파일 동기화 코드입니다.

// 관계 설정 예시를 작성합니다.
//Sequelize를 사용하여 애플리케이션의 데이터베이스 모델 간의 관계를 정의
const sequelize = require("./utils/database");
const User = require("../../models/User");
const Post = require("../../models/Post");

// 1:N 관계 설정
User.hasMany(Post, { foreignKey: "userId" });
// 1:1 관계 설정
Post.belongsTo(User, { foreignKey: "userId" });
// user는 여러 개의 post를 가질 수 있고, post는 하나의 user만을 가질 수 있습니다.

sequelize
  .sync({ force: false, logging: console.log })
  .then(() => {
    console.log("Tables have been created");
  })
  .catch((error) => {
    console.error("Unable to create tables:", error);
  });
``;
