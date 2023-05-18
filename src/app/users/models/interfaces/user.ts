import { Pokemons } from "../../../pokemon/model/pokemon_model";
import { Trad } from "../../../trade/trade_model";

export default interface IUser{ 
    firstName: string; 
    lastName: string; 
    login: string; 
    password: string; 
    birthDay: string ; 
    rightAccess: RightAccess; 
    pokemons: Pokemons[]; 
    trad: Trad[];
}
 
  