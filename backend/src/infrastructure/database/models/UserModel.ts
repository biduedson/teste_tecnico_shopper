import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { TravelModel } from "./TravelModel"; // Supondo que você crie o modelo de Travel

@Table({ tableName: "users" })
export class UserModel extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  // Relacionamento um para muitos entre o usuário e as viagens
  @HasMany(() => TravelModel)
  travels!: TravelModel[];
}
