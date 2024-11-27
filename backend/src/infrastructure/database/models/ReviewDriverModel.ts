import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { DriverModel } from "./DriverModel";

@Table({ tableName: "review" })
export class ReviewDriverModel extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  rating!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  comment!: string;

  @ForeignKey(() => DriverModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  driver_id!: number;

  @BelongsTo(() => DriverModel)
  driver!: DriverModel;
}
