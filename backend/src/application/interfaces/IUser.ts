import { TravelModel } from "../../infrastructure/database/models/TravelModel";
import { ITravel } from "./Travel";

export interface IUser {
  id: number;
  name: string;
  email: string;
  travels?: ITravel[];
}
