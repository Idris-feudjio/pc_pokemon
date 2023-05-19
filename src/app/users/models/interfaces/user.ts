import { Pokemons } from "../../../pokemon/model/pokemon_model";
import { Trad } from "../../../trad/trad_model";

export default interface IUser{ 
    firstName: string; 
    lastName: string; 
    login: string; 
    password: string; 
    birthDay: string ; 
    rightAccess: string; 
    pokemons: Pokemons[]; 
    trad: Trad[];
}
 
  