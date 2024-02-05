// utils/db.js
const { db } = require("../models/index");

const User = db.User;

export const createUser = async (userData: {
  user_id: string;
  user_pw: string;
}) => {
  return await User.create(userData);
};

export const getUserById = async (userIndex: number) => {
  return await User.findByPk(userIndex);
};

// todo : ts로 변환해야 한다.
// async function updateUser(userId, userData) {
//   return await db.User.update(userData, {
//     where: { user_index: userId },
//   });
// }

// async function deleteUser(userId) {
//   return await db.User.destroy({
//     where: { user_index: userId },
//   });
// }

module.exports = {
  createUser,
  getUserById,
  // updateUser,
  // deleteUser,
};
