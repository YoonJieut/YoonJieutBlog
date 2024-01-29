// app/utils/database.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_CONNECTION_STRING ||
    "postgres://postgres:root@localhost:5432/yoonjieut_blog"
);

export default sequelize;
