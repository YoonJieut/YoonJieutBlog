"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("test", {
      test_index: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      test_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      test_content: {
        type: Sequelize.STRING,
        allowNull: true, // 내용이 없을 수도 있으므로 null 허용
      },
      // Sequelize는 기본적으로 createdAt과 updatedAt 컬럼을 요구합니다.
      // 이 컬럼들을 명시적으로 추가하지 않으면, 모델과 마이그레이션 간의 불일치로 인해 오류가 발생할 수 있습니다.
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"), // 수정됨
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"), // 수정됨
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("test");
  },
};
