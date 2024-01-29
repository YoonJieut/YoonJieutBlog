// 관계 설정 예시를 작성합니다.
//Sequelize를 사용하여 애플리케이션의 데이터베이스 모델 간의 관계를 정의
const User = require("./User");
const Post = require("./Post");

// 1:N 관계 설정
User.hasMany(Post, { foreignKey: "userId" });
// 1:1 관계 설정
Post.belongsTo(User, { foreignKey: "userId" });
// user는 여러 개의 post를 가질 수 있고, post는 하나의 user만을 가질 수 있습니다.
