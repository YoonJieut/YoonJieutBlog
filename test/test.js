const { db } = require("../models/index"); // Sequelize 인스턴스를 가져옵니다.
// console.log(db);
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
