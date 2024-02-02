"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

// 시퀄라이즈 연결
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// * 모델 관계 설정
// * 실제 데이터 베이스에서 컬럼을 수정해야 한다.
// db.User.hasMany(db.Post, { foreignKey: "user_index", sourceKey: "user_index" });
// db.Post.belongsTo(db.User, {
//   foreignKey: "user_index",
//   targetKey: "user_index",
// });

// * 예시2 ) 모델 관계 설정
// const { User, Post } = db;

// User.hasMany(Post, { foreignKey: 'user_index' });
// Post.belongsTo(User, { foreignKey: 'user_index' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db };
