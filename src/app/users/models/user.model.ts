import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Pokemons } from "../../pokemon/model/pokemon_model";
import { Trad } from "../../trad/trad_model";
@Table({ tableName: "user", timestamps: false })
export default class User extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;
  @Column({ type: DataType.STRING, allowNull: false })
  login: string;
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
  @Column({ type: DataType.STRING, allowNull: false })
  birthDay: string;
  @Column({ type: DataType.STRING, allowNull: false })
  rightAccess: RightAccess;
  @HasMany(() => Pokemons, {
    onDelete: "CASCADE",
  })
  pokemons!: Pokemons[];
  @HasMany(() => Trad, {
    onDelete: "CASCADE",
  })
  trad!: Trad[];
}
