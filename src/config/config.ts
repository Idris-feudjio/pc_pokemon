import { Sequelize } from "sequelize-typescript";

import dotenv from "dotenv";

dotenv.config();

const connection = new Sequelize({
  dialect: "mysql",
  port: 3306,
  username: process.env.DB_USER,
  host:process.env.DB_HOST,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME,
  logging: false,
  models: [],
});

export default connection;
