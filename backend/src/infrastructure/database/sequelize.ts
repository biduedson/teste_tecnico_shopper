import { Sequelize } from "sequelize-typescript";
import { RideConfirmModel } from "./models/rideConfirmModel";
import { DriverRideModel } from "./models/driverRideModel";
import path from "path";
import { TravelModel } from "./models/TravelModel";
import { UserModel } from "./models/UserModel";
import { DriverModel } from "./models/DriverModel";
import { ReviewDriverModel } from "./models/ReviewDriverModel";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve(__dirname, "../database/ride_database.sqlite"),
  models: [
    RideConfirmModel,
    DriverRideModel,
    TravelModel,
    UserModel,
    DriverModel,
    ReviewDriverModel,
  ],
});

// Definição das associações

// Associação entre Usuário e Viagem
UserModel.hasMany(TravelModel, {
  foreignKey: "customer_id", // FK em TravelModel
  as: "userTravels", // Alias único
});
TravelModel.belongsTo(UserModel, {
  foreignKey: "customer_id",
  as: "travelCustomer", // Alias único para esta associação
});

// Associação entre Motorista e Viagem
DriverModel.hasMany(TravelModel, {
  foreignKey: "driver_id", // FK em TravelModel
  as: "driverTravels", // Alias único
});
TravelModel.belongsTo(DriverModel, {
  foreignKey: "driver_id",
  as: "travelDriver", // Alias único
});

// Associação entre Motorista e Review
DriverModel.hasMany(ReviewDriverModel, {
  foreignKey: "driver_id", // FK em ReviewDriverModel
  as: "driverReviews", // Alias único
});
ReviewDriverModel.belongsTo(DriverModel, {
  foreignKey: "driver_id",
  as: "reviewedDriver", // Alias único
});

export default sequelize;
