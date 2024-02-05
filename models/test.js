// models/test.js
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {}
  Test.init(
    {
      test_index: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      test_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      test_content: {
        type: DataTypes.STRING,
        allowNull: true, // 내용이 없을 수도 있으므로 null 허용
      },
    },
    {
      sequelize,
      modelName: "Test",
      tableName: "test",
    }
  );
  return Test;
};
