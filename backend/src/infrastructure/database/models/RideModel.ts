import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { UserModel } from "./UserModel"; // Relacionamento com o modelo de UserTravel
import { DriverModel } from "./DriverModel"; // Relacionamento com o modelo de Motorista

@Table({ tableName: "rides" })
export class TravelModel extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id!: number;

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.STRING, allowNull: false })
  customer_id!: string; // Referência ao ID do cliente (customer_id)

  @Column({ type: DataType.DATE, allowNull: false })
  date!: Date;

  @Column({ type: DataType.STRING, allowNull: false })
  origin!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  destination!: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  distance!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  duration!: string;

  @ForeignKey(() => DriverModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  driver_id!: number; // Referência ao motorista

  @Column({ type: DataType.FLOAT, allowNull: false })
  value!: number;

  // Relacionamento com o motorista
  @BelongsTo(() => DriverModel)
  driver!: DriverModel;
}
