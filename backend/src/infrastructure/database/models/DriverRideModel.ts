import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "drivers" })
export class DriverRideModel extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;
}
