import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
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
  gender!: Gender;

  @Column({ type: DataType.STRING, allowNull: false })
  weigth!: string;

  @Column({ type: DataType.NUMBER, allowNull: false })
  level!: number;

  //@Column({ type: DataType.NUMBER, allowNull: false })
  heigth!: number;

  //@Column({ type: DataType.BOOLEAN, allowNull: false })
  chrome!: boolean;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => User)
  @PrimaryKey
  @Column({ type: DataType.NUMBER, allowNull: false })
  userId!: number;
}
