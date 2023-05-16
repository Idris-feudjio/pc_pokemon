import { Sequelize } from "sequelize-typescript";

import dotenv from "dotenv";
import User from "../app/users/models/user.model";
import { Pokemons } from "../app/pokemon/model/pokemon_model";
import { Trad } from "../app/trad/trad_model";

dotenv.config();

const connection = new Sequelize({
  dialect: "mysql",
  port: 3306,
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME,
  logging: false,
  models: [User, Pokemons, Trad],
});

export default connection;
