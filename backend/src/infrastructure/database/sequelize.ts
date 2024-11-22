import { Sequelize } from "sequelize-typescript";
import { RideConfirmModel } from "./models/rideConfirmModel";
import { DriverRideModel } from "./models/driverRideModel";
import path from "path";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve(__dirname, "../database/ride_database.sqlite"),
  models: [RideConfirmModel],
});

export default sequelize;
