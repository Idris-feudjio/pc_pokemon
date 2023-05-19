export default class TradeItem {
  giverId: number;
  pokemonGiverId: number;
  pokemonReceiverId: number;
  creationDate: Date;
  constructor(
    giverId: number,
    pokemonGiverId: number,
    pokemonReceiverId: number,
    creationDate: Date
  ) {
    (this.giverId = giverId),
      (this.pokemonGiverId = pokemonGiverId),
      (this.pokemonReceiverId = pokemonReceiverId),
      (this.creationDate = creationDate);
  }
}
