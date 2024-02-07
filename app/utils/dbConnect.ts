import mysql from "mysql";

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err: Error) => {
  if (err) {
    console.error("Database connection failed: ", err);
    return;
  }
  console.log("Connected to the MySQL server.");
});

export default connection;
