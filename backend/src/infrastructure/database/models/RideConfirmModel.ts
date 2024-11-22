import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "rideConfirm" })
export class RideConfirmModel extends Model {
  @Column({ type: DataType.STRING })
  customer_id!: string;

  @Column({ type: DataType.STRING })
  origin!: string;

  @Column({ type: DataType.STRING })
  destination!: string;

  @Column({ type: DataType.INTEGER })
  distance!: number;

  @Column({ type: DataType.STRING })
  duration!: string;

  @Column({ type: DataType.FLOAT })
  value!: number;

  @Column({ type: DataType.JSON })
  driver!: {
    id: number;
    name: string;
  };
}
