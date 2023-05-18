import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey, 
  BelongsTo,
} from "sequelize-typescript";
import User from "../../users/models/user.model";
@Table({
  timestamps: false,
  tableName: "pokemons",
})
export class Pokemons extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  espece: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  gender: string;

  @Column({ type: DataType.DOUBLE, allowNull: false })
  weigth: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  level: number;

  @Column({ type: DataType.DOUBLE, allowNull: false ,})
  heigth: number;

  @Column({ type: DataType.STRING, allowNull: false })
  chrome: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
