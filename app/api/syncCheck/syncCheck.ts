import sequelize from "@/utils/database";

sequelize
  .sync({ force: false, logging: console.log })
  .then(() => {
    console.log("Tables have been created");
  })
  .catch((error) => {
    console.error("Unable to create tables:", error);
  });
