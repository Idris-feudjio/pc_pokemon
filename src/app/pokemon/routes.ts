import { Router } from "express";
import {
  createPokemons,
  deletePokemons,
  getAllPokemons,
  getPokemonsById,
  updatePokemons,
} from "./controller/pokemons_controller";
import { Schema, ValidateSchema } from "../../midleware/validations";

const pokemonsRouter = Router();

pokemonsRouter.post("/users/:userId/pokemons",ValidateSchema(Schema.pokemons.create), createPokemons);
//pokemonsRouter.get("/users/:userId/pokemons", getAllUserPokemons);
pokemonsRouter.get("/users/:userId/pokemons", getAllPokemons);
pokemonsRouter.get("/users/:userId/pokemons/:id", getPokemonsById);
pokemonsRouter.put("/users/:userId/pokemons/:id", updatePokemons);
pokemonsRouter.patch("/users/:userId/pokemons/:id", updatePokemons);
pokemonsRouter.delete("/users/:userId/pokemons/:id", deletePokemons);

export default pokemonsRouter;
