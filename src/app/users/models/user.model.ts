import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Pokemons } from "../../pokemon/model/pokemon_model";
import { Trad } from "../../trad/trad_model";
@Table({ tableName: "user", timestamps: false })
export default class User extends Model {
  @Column({ type: DataType.INTEGER, allowNull: false })
  firstName: string;
  @Column({ type: DataType.INTEGER, allowNull: false })
  lastName: string;
  @Column({ type: DataType.INTEGER, allowNull: false })
  login: string;
  @Column({ type: DataType.INTEGER, allowNull: false })
  password: string;
  @Column({ type: DataType.INTEGER, allowNull: false })
  birthDay: string;
  @Column({ type: DataType.INTEGER, allowNull: false })
  rightAccess: RightAccess = RightAccess.ADMIN;
  @HasMany(() => Pokemons, {
    onDelete: "CASCADE",
  })
  pokemons!: Pokemons[];
  @HasMany(() => Trad, {
    onDelete: "CASCADE",
  })
  trad!: Trad[];
}
