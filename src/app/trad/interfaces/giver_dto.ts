import { Optional } from "sequelize";

export type GiverPokemon = Optional<ITrade, "tradeId">;
