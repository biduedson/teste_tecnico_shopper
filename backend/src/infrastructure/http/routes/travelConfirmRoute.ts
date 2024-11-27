import { Router } from "express";
import { RideUseCasesImpl } from "../../../application/useCases/implementations/RideUseCasesImpl";
import { TravelConfirmController } from "../controllers/TravelConfirmController";
import { Request, Response } from "express";
import { RideRepositoryImpl } from "../../database/repositories/implementations/rideRepositoryImpl";
import { ValidateRideServiceImpl } from "../../../domain/services/validation/ValidateRideServiceImpl";

export const travelConfirmRoute = Router();

const rideRepository = new RideRepositoryImpl();
const validateRideService = new ValidateRideServiceImpl();
const rideUseCases = new RideUseCasesImpl(rideRepository, validateRideService);
const travelConfirmController = new TravelConfirmController(rideUseCases);

travelConfirmRoute.patch("/confirm", async (req: Request, res: Response) => {
  const { StatusCode, Descricao, Resposta } =
    await travelConfirmController.saveRide(req.body);
  res.status(StatusCode).json({ StatusCode, Descricao, Resposta });
});
