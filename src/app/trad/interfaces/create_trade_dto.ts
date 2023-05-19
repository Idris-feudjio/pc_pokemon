import { Pokemons } from "../../pokemon/model/pokemon_model";

interface ITrade {
  id: number;
  receiverId: number;
  giverId: number;
  tradStatus: number;
  createdAt: string;
  updatedAt: string; 
  tradItem: Pokemons[];
}
