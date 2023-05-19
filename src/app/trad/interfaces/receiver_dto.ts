import TradeItem from "../models/trade_item_model";

export default interface RecieverPokemonDto { 
    receiverId: number; 
    tradStatus: string; 
    updatedAt: Date; 
    tradItem: TradeItem[];
  }
  