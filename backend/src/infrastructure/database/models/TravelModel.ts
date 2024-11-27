import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { UserModel } from "./UserModel";
import { DriverModel } from "./DriverModel"; // Importando DriverModel

@Table({ tableName: "travels" })
export class TravelModel extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id!: number;

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  customer_id!: number; // Referência ao ID do usuário (foreign key)

  @Column({ type: DataType.DATE })
  date!: Date;

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

  // Relacionamento com o usuário (customer_id)
  @BelongsTo(() => UserModel)
  customer!: UserModel;

  // Relacionamento com o motorista (driver_id)
  @ForeignKey(() => DriverModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  driver_id!: number; // Referência ao ID do motorista

  @BelongsTo(() => DriverModel)
  driver!: DriverModel; // Motorista da viagem
}
