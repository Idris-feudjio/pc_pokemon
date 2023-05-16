import { Router } from "express";
import {
  createPokemons,
  deletePokemons,
  getAllPokemons,
  getPokemonsById,
  updatePokemons,
} from "./controller/pokemons_controller";

const pokemonsRouter = Router();

pokemonsRouter.post("/users/:userId/pokemons", createPokemons);
pokemonsRouter.get("/users/:userId/pokemons", getAllPokemons);
pokemonsRouter.get("/users/:userId/pokemons/:pokemonId", getPokemonsById);
pokemonsRouter.put("/users/:userId/pokemons/:pokemonId", updatePokemons);
pokemonsRouter.patch("/users/:userId/pokemons/:pokemonId", updatePokemons);
pokemonsRouter.delete("/users/:userId/pokemons/:pokemonId", deletePokemons);

export default pokemonsRouter;
