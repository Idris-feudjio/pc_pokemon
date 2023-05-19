import TradeItem from "../models/trade_item_model";

export default interface GiverPokemonDto {
  giverId: number;
  tradStatus: string;
  createdAt: Date;
  tradItem: TradeItem[];
}
