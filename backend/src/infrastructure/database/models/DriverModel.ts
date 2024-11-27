import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { ReviewDriverModel } from "./ReviewDriverModel";
import { TravelModel } from "./TravelModel";

@Table({ tableName: "drivers" })
export class DriverModel extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  vehicle!: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  ratePerKm!: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  minKm?: number;

  // Agora, review é um objeto com rating e comment
  @Column({ type: DataType.JSONB, allowNull: true })
  review?: {
    rating: number;
    comment: string;
  };

  // Relacionamento com Viagens (Motorista pode ter várias viagens)
  @HasMany(() => TravelModel, { foreignKey: "driver_id" })
  travels!: TravelModel[];
}
