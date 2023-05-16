"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePokemons = exports.getPokemonsById = exports.getAllPokemons = exports.deletePokemons = exports.createPokemons = void 0;
const pokemon_model_1 = require("../model/pokemon_model");
const createPokemons = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var pokemons = yield pokemon_model_1.Pokemons.create(Object.assign({}, req.body));
    if (pokemons) {
        return res
            .status(200)
            .json({ message: "Pokemons created successfully", data: pokemons });
    }
    return res.json({ message: "ERROR" });
});
exports.createPokemons = createPokemons;
const deletePokemons = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedPokemons = yield pokemon_model_1.Pokemons.findByPk(id);
    yield pokemon_model_1.Pokemons.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Pokemons deleted successfully", data: deletedPokemons });
});
exports.deletePokemons = deletePokemons;
const getAllPokemons = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allPokemons = yield pokemon_model_1.Pokemons.findAll();
    return res
        .status(200)
        .json({ message: "Pokemons fetched successfully", data: allPokemons });
});
exports.getAllPokemons = getAllPokemons;
const getPokemonsById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pokemons = yield pokemon_model_1.Pokemons.findByPk(id);
    return res
        .status(200)
        .json({ message: "Pokemons fetched successfully", data: pokemons });
});
exports.getPokemonsById = getPokemonsById;
const updatePokemons = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield pokemon_model_1.Pokemons.update(Object.assign({}, req.body), { where: { id } });
    const updatedPokemons = yield pokemon_model_1.Pokemons.findByPk(id);
    return res
        .status(200)
        .json({ message: "Pokemons updated successfully", data: updatedPokemons });
});
exports.updatePokemons = updatePokemons;
//# sourceMappingURL=pokemons_controller.js.map