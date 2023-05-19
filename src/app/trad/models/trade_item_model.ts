export default class TradeItem {
  private giverId: number;
  private pokemonGiverId: number;
  private pokemonReceiverId: number;
  private creationDate: Date;
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
