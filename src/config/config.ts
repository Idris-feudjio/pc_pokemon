import { Sequelize } from "sequelize-typescript";

const port = process.env.PORT;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const connection = new Sequelize({
  dialect: "mysql",
  port:  3000,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "pokemon_db",
  logging: false,
  models: [],
});

export default connection;
