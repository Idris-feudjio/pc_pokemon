"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
const user_model_1 = __importDefault(require("../app/users/models/user.model"));
const pokemon_model_1 = require("../app/pokemon/model/pokemon_model");
const trad_model_1 = require("../app/trad/trad_model");
dotenv_1.default.config();
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    port: 3306,
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME,
    logging: false,
    models: [user_model_1.default, pokemon_model_1.Pokemons, trad_model_1.Trad],
});
exports.default = connection;
//# sourceMappingURL=config.js.map