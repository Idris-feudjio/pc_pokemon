"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controllers/controller"));
const tradeRouter = (0, express_1.Router)();
var tradeController = new controller_1.default();
function ensureAuthenticated(req, res, next) {
    console.log(req.user);
    if (req.user) {
        return next();
    }
    res.status(404).send({ message: "you must login!" });
}
tradeRouter.post("/trade", 
//ValidateSchema(Schema.trade.initializeTrade),
tradeController.createTrade);
tradeRouter.get("/users/:userId/trade", tradeController.getAllTradeByUser);
tradeRouter.get("/users/:userId/trade", tradeController.tradeWaitingLine);
tradeRouter.get("/trade", tradeController.getAllTrade);
tradeRouter.get("/users/:userId/trade/:tradeId", tradeController.getTradeById);
tradeRouter.patch("/trade/:tradeId", tradeController.updateTrade);
exports.default = tradeRouter;
//# sourceMappingURL=trade_route.js.map