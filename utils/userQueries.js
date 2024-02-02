// utils/db.js
const { db } = require("../models/index");

async function createUser(userData) {
  return await db.User.create(userData);
}

async function getUserById(userId) {
  return await db.User.findByPk(userId);
}

async function updateUser(userId, userData) {
  return await db.User.update(userData, {
    where: { user_index: userId },
  });
}

async function deleteUser(userId) {
  return await db.User.destroy({
    where: { user_index: userId },
  });
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
