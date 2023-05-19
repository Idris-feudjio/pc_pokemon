import { RequestHandler } from "express";
import ServiceTrade from "../services/service_trad";
import { Trad } from "../models/trad_model";
import User from "../../users/models/user.model";
import { log } from "console";
import { Pokemons } from "../../pokemon/model/pokemon_model";

export default class TradeController extends ServiceTrade {
  private tradeService = new ServiceTrade();

  updateTrade: RequestHandler = async (req, res, next) => {
    const { tradeId } = req.params;
    const trade = await Trad.findByPk(tradeId);
    if (trade !== null) {
      const bodyContainer = { ...req.body };
      let { tradStatus, giverId, receiverId } = bodyContainer;
      if (tradStatus.toUpperCase() === "CANCELED") {
        trade.tradStatus = tradStatus.toUpperCase();
        trade.save();
        return res.status(200).json({ message: "Trade was refuse" });
      } else if (tradStatus.toUpperCase() === "ACCEPTED") {
        if (giverId !== receiverId) {
          trade.tradeItem?.forEach(async (tradeItem) => {
            const giverPokemon: Pokemons | null = await Pokemons.findOne({
              where: { id: tradeItem.pokemonGiverId },
            });
            const recieverPokemon: Pokemons | null = await Pokemons.findOne({
              where: { id: tradeItem.pokemonReceiverId },
            });
            if (giverPokemon != null && recieverPokemon != null) {
              giverPokemon.userId = tradeItem.pokemonReceiverId;
              recieverPokemon.userId = tradeItem.pokemonGiverId;
              giverPokemon.save();
              recieverPokemon.save();
            }
          });
          return res
            .status(200)
            .json({ message: "Trade updated successfully" });
        } else {
          return res
            .status(504)
            .json({ message: "on ne peut pas négocier contre soi-même" });
        }
      } else {
        return res.status(504).json({ message: "Something when wrong" });
      }
    } else {
      return res.status(504).json({ message: "Trade Not Found" });
    }
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

  tradeWaitingLine: RequestHandler = async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    if (user) {
      const userTrade: Trad[] = await Trad.findAll({
        where: { giverId: userId, tradStatus: "PROPOSE" },
      });
      return res
        .status(200)
        .json({ message: "Trad updated successfully", data: userTrade });
    } else {
      res.status(504).json({ message: "User Not Found" });
    }
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
