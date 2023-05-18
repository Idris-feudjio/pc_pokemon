"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemons_controller_1 = require("./controller/pokemons_controller");
const validations_1 = require("../../midleware/validations");
const pokemonsRouter = (0, express_1.Router)();
pokemonsRouter.post("/users/:userId/pokemons", (0, validations_1.ValidateSchema)(validations_1.Schema.pokemons.create), pokemons_controller_1.createPokemons);
//pokemonsRouter.get("/users/:userId/pokemons", getAllUserPokemons);
pokemonsRouter.get("/users/:userId/pokemons", pokemons_controller_1.getAllPokemons);
pokemonsRouter.get("/users/:userId/pokemons/:id", pokemons_controller_1.getPokemonsById);
pokemonsRouter.put("/users/:userId/pokemons/:id", pokemons_controller_1.updatePokemons);
pokemonsRouter.patch("/users/:userId/pokemons/:id", pokemons_controller_1.updatePokemons);
pokemonsRouter.delete("/users/:userId/pokemons/:id", pokemons_controller_1.deletePokemons);
exports.default = pokemonsRouter;
//# sourceMappingURL=routes.js.map