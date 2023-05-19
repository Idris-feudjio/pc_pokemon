import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  Validate
} from "sequelize-typescript";
import { Pokemons } from "../../pokemon/model/pokemon_model";
import { Trad } from "../../trad/trad_model";
@Table({ tableName: "user", timestamps: false })
export default class User extends Model {
  @Validate({ notNull: { msg: "You must enter a firstName" } })
  @Column({ type: DataType.STRING, allowNull: false,defaultValue: 'Pokemaniac' })
  firstName: string;
  @Column({ type: DataType.STRING, allowNull: false , defaultValue: 'Leo'})
  lastName: string;
  @Column({ type: DataType.STRING, allowNull: false ,defaultValue: 'leopkmn'})
  login: string;
  @Column({ type: DataType.STRING, allowNull: false ,defaultValue: 'cynthia'})
  password: string;
  @Column({ type: DataType.STRING, allowNull: true ,defaultValue: '8 octobre 1999'})
  birthDay!: string;
  @Column({ type: DataType.STRING, allowNull: false ,defaultValue: 'users:create users:read users:update:all users:delete:all pokemons:create:all pokemons:read pokemons:update:all pokemons:delete:all trade:create:all trade:read trade:update:all logs:read' })
  rightAccess!: string;
  @HasMany(() => Pokemons, {
    onDelete: "CASCADE",
  })
  pokemons!: Pokemons[];
  @HasMany(() => Trad, {
    onDelete: "CASCADE",
  })
  trad!: Trad[];
}
