"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validations_1 = require("../../midleware/validations");
const pokemons_controller_1 = __importDefault(require("./controller/pokemons_controller"));
const pokemonsRouter = (0, express_1.Router)();
const pokemonsController = new pokemons_controller_1.default();
pokemonsRouter.post("/users/:userId/pokemons", (0, validations_1.ValidateSchema)(validations_1.Schema.pokemons.create), pokemonsController.createPokemons);
pokemonsRouter.get("/pokemons", pokemonsController.getAllPokemons);
pokemonsRouter.get("/users/:userId/pokemons", pokemonsController.findAllPokemonPaginate);
pokemonsRouter.get("/users/:userId/pokemons/:id", pokemonsController.getPokemonsById);
pokemonsRouter.put("/users/:userId/pokemons/:id", pokemonsController.updatePokemons);
pokemonsRouter.patch("/users/:userId/pokemons/:id", pokemonsController.updatePokemons);
pokemonsRouter.delete("/users/:userId/pokemons/:id", pokemonsController.deletePokemons);
exports.default = pokemonsRouter;
//# sourceMappingURL=routes.js.map