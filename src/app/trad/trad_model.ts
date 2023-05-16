import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import User from "../users/models/user.model";
@Table({
  timestamps: false,
  tableName: "trad",
})
export class Trad extends Model {
  @Column({ type: DataType.NUMBER, allowNull: false })
  giver_id: number;
  @Column({ type: DataType.NUMBER, allowNull: true })
  receiver_id: number;
  @Column({ type: DataType.NUMBER, allowNull: true })
  tradStatus: number;
  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.NUMBER, allowNull: false })
  userId: number;
}
