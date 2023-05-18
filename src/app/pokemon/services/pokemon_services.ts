import { Model } from "sequelize-typescript";  
import { AbstractRepository } from "../../../public/repositories/abstract_crud_repositories";
import { Pokemons } from "../model/pokemon_model";

export class PokemonsService extends AbstractRepository<Pokemons> {
  constructor() {
    super(Pokemons);
  } 
}
