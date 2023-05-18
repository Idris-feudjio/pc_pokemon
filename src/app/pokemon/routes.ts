import { Router } from "express";
import { Schema, ValidateSchema } from "../../midleware/validations";
import PokemonsController from "./controller/pokemons_controller";

const pokemonsRouter = Router();

const pokemonsController = new PokemonsController();

pokemonsRouter.post(
  "/users/:userId/pokemons",
  ValidateSchema(Schema.pokemons.create),
  pokemonsController.createPokemons
);
pokemonsRouter.get(
  "/users/:userId/pokemons",
  pokemonsController.findAllPokemonPaginate
);
pokemonsRouter.get(
  "/users/:userId/pokemons/:id",
  pokemonsController.getPokemonsById
);
pokemonsRouter.put(
  "/users/:userId/pokemons/:id",
  pokemonsController.updatePokemons
);
pokemonsRouter.patch(
  "/users/:userId/pokemons/:id",
  pokemonsController.updatePokemons
);
pokemonsRouter.delete(
  "/users/:userId/pokemons/:id",
  pokemonsController.deletePokemons
);

export default pokemonsRouter;
