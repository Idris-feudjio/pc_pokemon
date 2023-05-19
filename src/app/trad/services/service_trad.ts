import { RequestHandler } from "express";
import { AbstractRepository } from "../../../public/repositories/abstract_crud_repositories";
import { Trad } from "../models/trad_model";
import User from "../../users/models/user.model";
import { Pokemons } from "../../pokemon/model/pokemon_model";
import TradeItem from "../models/trade_item_model";

export default class ServiceTrade extends AbstractRepository<Trad> {
  constructor() {
    super(Trad);
  }
  createTrade: RequestHandler = async (req, res, next) => {
    const { giverId, tradeItem } = req.body;

    const user = await User.findOne({ where: { id: giverId } });
    if (user) {
      const tradeItems: TradeItem[] = tradeItem;
      const request = { ...req.body };
      request["tradStatus"] = "PROPOSE"; 
      var trad = await Trad.create(request);
      return res
        .status(200)
        .json({ message: "Trad created successfully", data: trad });
    } else {
      return res.status(504).json({ message: "user not found" });
    }
  };

  async pokemonExist(tradeItems: TradeItem[]) {
    const exist: boolean = true;
    for (const trade in tradeItems) {
      console.log(trade);
    }
    //return exist;
  }
}
