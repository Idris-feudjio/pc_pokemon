import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
} from "sequelize-typescript";
import User from "../users/models/user.model";
@Table({
  tableName: "trad",
  createdAt: true,
  updatedAt: true,
})
export class Trad extends Model {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  receiverId!: number;
  @Column({ type: DataType.DATE, allowNull: false })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  giverId!: number;

  @BelongsTo(() => User)
  user: User;

  @Column({ type: DataType.STRING, allowNull: true })
  tradStatus: number;

  createdAt: string;
  @Column({ type: DataType.DATE, allowNull: false })
  updatedAt: string;
}
