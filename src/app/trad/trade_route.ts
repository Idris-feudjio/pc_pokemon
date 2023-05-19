import { NextFunction, Request, Response, Router } from "express"; 
import { Schema, ValidateSchema } from "../../midleware/validations";
import passport from "passport";
import TradeController from "./controllers/controller";
const tradeRouter = Router();
var tradeController = new TradeController();

function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  console.log(req.user);
  if (req.user) {
    return next();
  }
  res.status(404).send({ message: "you must login!" });
}

tradeRouter.post(
  "/trade", 
 //ValidateSchema(Schema.trade.initializeTrade),
  tradeController.createTrade
);
tradeRouter.get("/users/:userId/trade", tradeController.getAllTradeByUser);
tradeRouter.get("/users/:userId/trade", tradeController.tradeWaitingLine);
tradeRouter.get("/trade", tradeController.getAllTrade);
tradeRouter.get("/users/:userId/trade/:tradeId", tradeController.getTradeById); 

tradeRouter.patch("/trade/:tradeId", tradeController.updateTrade);  


export default tradeRouter;