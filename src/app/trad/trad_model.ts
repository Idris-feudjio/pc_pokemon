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
  tableName: "trad",
})
export class Trad extends Model {
 
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  receiverId!: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  giverId!: number;

  @BelongsTo(() => User)
  user: User;

  @Column({ type: DataType.STRING, allowNull: true })
  tradStatus: number;
}
