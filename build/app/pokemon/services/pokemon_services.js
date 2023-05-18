"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonsService = void 0;
const abstract_crud_repositories_1 = require("../../../public/repositories/abstract_crud_repositories");
const pokemon_model_1 = require("../model/pokemon_model");
class PokemonsService extends abstract_crud_repositories_1.AbstractRepository {
    constructor() {
        super(pokemon_model_1.Pokemons);
    }
}
exports.PokemonsService = PokemonsService;
//# sourceMappingURL=pokemon_services.js.map