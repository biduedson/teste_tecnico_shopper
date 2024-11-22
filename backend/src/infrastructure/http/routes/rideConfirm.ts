import { Router } from "express";
import { RideUseCasesImpl } from "../../../application/useCases/implementations/RideUseCasesImpl";
import { RideConfirmController } from "../controllers/RideConfirmController";
import { Request, Response } from "express";
import { RideRepositoryImpl } from "../../database/repositories/implementations/rideRepositoryImpl";

export const ridecofirmRoutes = Router();

const rideRepository = new RideRepositoryImpl();
const rideUseCases = new RideUseCasesImpl(rideRepository);
const rideConfirmController = new RideConfirmController(rideUseCases);

ridecofirmRoutes.patch("/confirm", async (req: Request, res: Response) => {
  const { StatusCode, Descricao, Resposta } =
    await rideConfirmController.saveRide(req.body);
  res.status(StatusCode).json({ StatusCode, Descricao, Resposta });
});
