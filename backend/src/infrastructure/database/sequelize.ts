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

UserModel.hasMany(TravelModel, {
  foreignKey: "customer_id",
});

TravelModel.belongsTo(UserModel, {
  foreignKey: "customer_id",
  as: "travelCustomer",
});

DriverModel.hasMany(TravelModel, {
  foreignKey: "driver_id",
  as: "driverTravels",
});
TravelModel.belongsTo(DriverModel, {
  foreignKey: "driver_id",
  as: "travelDriver",
});

DriverModel.hasMany(ReviewDriverModel, {
  foreignKey: "driver_id",
  as: "driverReviews",
});
ReviewDriverModel.belongsTo(DriverModel, {
  foreignKey: "driver_id",
  as: "reviewedDriver",
});

export default sequelize;
