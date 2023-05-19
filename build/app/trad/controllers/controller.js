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
const service_trad_1 = __importDefault(require("../services/service_trad"));
const trad_model_1 = require("../models/trad_model");
class TradeController extends service_trad_1.default {
    constructor() {
        super(...arguments);
        this.tradeService = new service_trad_1.default();
        this.updateTrade = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield trad_model_1.Trad.update(Object.assign({}, req.body), { where: { id } });
            const updatedTrade = yield trad_model_1.Trad.findOne({
                where: { id },
                attributes: [],
            });
            return res
                .status(200)
                .json({ message: "Trad updated successfully", data: updatedTrade });
        });
        this.deleteTrade = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const trade = yield trad_model_1.Trad.findByPk(id);
            if (trade) {
                yield trad_model_1.Trad.destroy({ where: { id } });
                return res.status(200).json({ message: "Trade deleted successfully" });
            }
            else {
                res.status(504).json({ message: "Trade Not Found" });
            }
        });
        this.getAllTradeByUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const allTrade = yield trad_model_1.Trad.findAll({ where: { giverId: userId } });
            return res
                .status(200)
                .json({ message: "Trade fetched successfully", data: allTrade });
        });
        this.getAllTrade = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const allTrade = yield trad_model_1.Trad.findAll();
            return res
                .status(200)
                .json({ message: "Trade fetched successfully", data: allTrade });
        });
        this.getTradeById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const trade = yield trad_model_1.Trad.findByPk(id);
            return res
                .status(200)
                .json({ message: "Trade fetched successfully", data: trade });
        });
    }
}
exports.default = TradeController;
//# sourceMappingURL=controller.js.map