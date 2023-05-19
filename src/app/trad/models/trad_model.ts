import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  IsArray,
  ForeignKey,
} from "sequelize-typescript";
import User from "../../users/models/user.model";
import TradeItem from "./trade_item_model";
@Table({
  tableName: "trad",
  timestamps: true,
  // createdAt: true,
  // updatedAt: true,
})
export class Trad extends Model {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: true })
  receiverId?: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  giverId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    get() {
      return JSON.parse(this.getDataValue("tradeItem"));
    },
    set(val) {
      return this.setDataValue("tradeItem", JSON.stringify(val));
    },
  })
  tradeItem?: Array<TradeItem>;

  @BelongsTo(() => User)
  user: User;

   @Column({ type: DataType.STRING, allowNull: false })
   tradStatus: string;
  //
  // @Column({ type: DataType.DATE, allowNull: false })
  // updatedAt: string;
}
