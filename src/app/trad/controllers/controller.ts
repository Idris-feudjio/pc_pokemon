import { RequestHandler } from "express";
import ServiceTrade from "../services/service_trad";
import { Trad } from "../models/trad_model";
import User from "../../users/models/user.model";

export default class TradeController extends ServiceTrade {
  private tradeService = new ServiceTrade();

  updateTrade: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    await Trad.update({ ...req.body }, { where: { id } });
    const updatedTrade: Trad | null = await Trad.findOne({
      where: { id },
      attributes: [],
    });
    return res
      .status(200)
      .json({ message: "Trad updated successfully", data: updatedTrade });
  };

  deleteTrade: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const trade: Trad | null = await Trad.findByPk(id);
    if (trade) {
      await Trad.destroy({ where: { id } });
      return res.status(200).json({ message: "Trade deleted successfully" });
    } else {
      res.status(504).json({ message: "Trade Not Found" });
    }
  };

  getAllTradeByUser: RequestHandler = async (req, res, next) => {
    const { userId } = req.params;
    const allTrade: Trad[] = await Trad.findAll({ where: { giverId: userId } });
    return res
      .status(200)
      .json({ message: "Trade fetched successfully", data: allTrade });
  };
  getAllTrade: RequestHandler = async (req, res, next) => { 
    const allTrade: Trad[] = await Trad.findAll();
    return res
      .status(200)
      .json({ message: "Trade fetched successfully", data: allTrade });
  };

  getTradeById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const trade: Trad | null = await Trad.findByPk(id);
    return res
      .status(200)
      .json({ message: "Trade fetched successfully", data: trade });
  };
}
