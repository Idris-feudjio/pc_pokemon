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
const abstract_crud_repositories_1 = require("../../../public/repositories/abstract_crud_repositories");
const trad_model_1 = require("../models/trad_model");
const user_model_1 = __importDefault(require("../../users/models/user.model"));
class ServiceTrade extends abstract_crud_repositories_1.AbstractRepository {
    constructor() {
        super(trad_model_1.Trad);
        this.createTrade = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { giverId, tradeItem } = req.body;
            const user = yield user_model_1.default.findOne({ where: { id: giverId } });
            if (user) {
                const tradeItems = tradeItem;
                const request = Object.assign({}, req.body);
                request["tradStatus"] = "PROPOSE";
                var trad = yield trad_model_1.Trad.create(request);
                return res
                    .status(200)
                    .json({ message: "Trad created successfully", data: trad });
            }
            else {
                return res.status(504).json({ message: "user not found" });
            }
        });
    }
    pokemonExist(tradeItems) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = true;
            for (const trade in tradeItems) {
                console.log(trade);
            }
            //return exist;
        });
    }
}
exports.default = ServiceTrade;
//# sourceMappingURL=service_trad.js.map