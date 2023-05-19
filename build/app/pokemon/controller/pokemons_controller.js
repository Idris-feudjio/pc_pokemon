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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_model_1 = require("../model/pokemon_model");
const pokemon_services_1 = require("../services/pokemon_services");
const paginations_1 = __importDefault(require("../../../helpers/paginations"));
const user_model_1 = __importDefault(require("../../users/models/user.model"));
class PokemonsController extends pokemon_services_1.PokemonsService {
    constructor() {
        super(...arguments);
        this.pokemonsService = new pokemon_services_1.PokemonsService();
        this.createPokemons = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const user = yield user_model_1.default.findByPk(userId);
            if (user) {
                const request = Object.assign({}, req.body);
                request["userId"] = userId;
                var pokemons = yield pokemon_model_1.Pokemons.create(request);
                if (pokemons) {
                    return res
                        .status(200)
                        .json({ message: "Pokemons created successfully", data: pokemons });
                }
                return res.json({ message: "ERROR" });
            }
            else {
                res.status(504).json({ message: "User Not Found" });
            }
        });
        this.deletePokemons = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deletedPokemons = yield pokemon_model_1.Pokemons.findByPk(id);
            yield pokemon_model_1.Pokemons.destroy({ where: { id } });
            return res.status(200).json({
                message: "Pokemons deleted successfully",
                data: deletedPokemons,
            });
        });
        this.getAllPokemons = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const allPokemons = yield pokemon_model_1.Pokemons.findAll();
            return res
                .status(200)
                .json({ message: "Pokemons fetched successfully", data: allPokemons });
        });
        this.getPokemonsById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pokemons = yield pokemon_model_1.Pokemons.findByPk(id);
            return res
                .status(200)
                .json({ message: "Pokemons fetched successfully", data: pokemons });
        });
        this.updatePokemons = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { userId, id } = req.params;
            const user = yield pokemon_model_1.Pokemons.findOne({ where: { userId } });
            if (user) {
                yield pokemon_model_1.Pokemons.update(Object.assign({}, req.body), { where: { id } });
                const updatedPokemons = yield pokemon_model_1.Pokemons.findByPk(id);
                return res.status(200).json({
                    message: "Pokemons updated successfully",
                    data: updatedPokemons,
                });
            }
            else {
                res.status(504).json({ message: "User Not Found" });
            }
        });
        this.getUserPokemons = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const pokemons = yield this.pokemonsService.findOne({
                userId: parseInt(userId),
            });
            return res
                .status(200)
                .json({ message: "Pokemons fetched successfully", data: pokemons });
        });
        this.findAllPokemonPaginate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { page, pageSize, qurey } = req.body;
            const { userId } = req.params;
            const pokemons = yield pokemon_model_1.Pokemons.findAndCountAll({
                where: Object.assign(Object.assign({}, qurey), { userId: userId }),
                limit: pageSize !== null && pageSize !== void 0 ? pageSize : 20,
                offset: page !== null && page !== void 0 ? page : 0,
            });
            const allPokemons = (0, paginations_1.default)(pokemons, page !== null && page !== void 0 ? page : 0, pageSize !== null && pageSize !== void 0 ? pageSize : 20);
            return res
                .status(200)
                .json({ message: "Pokemons fetched successfully", data: allPokemons });
        });
    }
}
exports.default = PokemonsController;
//# sourceMappingURL=pokemons_controller.js.map