import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { TravelModel } from "./TravelModel"; // Supondo que você crie o modelo de Travel

@Table({ tableName: "users", timestamps: true })
export class UserModel extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
  })
  customer_id!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  name!: string;

  // Relacionamento um para muitos entre o usuário e as viagens
  @HasMany(() => TravelModel)
  rides!: TravelModel[] | [];
}
