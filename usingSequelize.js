import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const database = process.env.DATABASE;
const username = process.env.USER;
const password = process.env.PASSWORD;
const port = process.env.port;

export const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "mysql",
  port: port,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
