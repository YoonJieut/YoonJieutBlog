const { User } = require("@/models/user"); // 모델을 불러옵니다.

/**
 *     {
      user_index: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_pw: {
        type: DataTypes.STRING,
        allowNull: false,
      },
 */

async function createUser() {
  try {
    const newUser = await User.create({
      user_id: "testId",
      user_pw: "testPw",
    });
    console.log("새로운 사용자 생성 성공:", newUser);
  } catch (error) {
    console.error("사용자 생성 중 오류 발생:", error);
  }
}

createUser();
