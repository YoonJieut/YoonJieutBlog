const sequelize = require("../../api/utils/database");

// 시퀄라이즈 인증, 확인 코드
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
