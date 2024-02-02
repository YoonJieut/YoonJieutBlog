"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("posts", {
      post_index: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      post_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      post_content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_index: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "user_index",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("posts");
  },
};
