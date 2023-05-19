import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  Validate
} from "sequelize-typescript";
import { Pokemons } from "../../pokemon/model/pokemon_model";
import { Trad } from "../../trad/models/trad_model";
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
  @Column({ type: DataType.STRING, allowNull: false ,defaultValue: '8 octobre 1999'})
  birthDay!: string;
  @Column({ type: DataType.STRING, allowNull: false ,defaultValue: "l\'intégralité des droits"})
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
