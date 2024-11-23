import { Sequelize } from "sequelize-typescript";
import { RideConfirmModel } from "./models/RideConfirmModel";
import { DriverRideModel } from "./models/DriverRideModel";
import path from "path";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve(__dirname, "../database/ride_database.sqlite"),
  models: [RideConfirmModel, DriverRideModel],
});

export default sequelize;
