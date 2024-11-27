import { Router } from "express";
import { Request, Response } from "express";
import { RideEstimateRouteController } from "../controllers/RideEstimateRouteController";
import { CalculateRideRepositoryImpl } from "../../database/repositories/implementations/CalculateRideRepositoryImpl";
import { RideEstimateUseCasesImpl } from "../../../application/useCases/implementations/RideEstimateUseCasesImpl";
import { AddressValidationService } from "../../../domain/services/validation/AddressValidationServiceImpl";

export const estimateRideRoute = Router();

const calculateRideRepository = new CalculateRideRepositoryImpl();
const addressValidationService = new AddressValidationService();
const calculateRideUseCases = new RideEstimateUseCasesImpl(
  calculateRideRepository,
  addressValidationService
);

const estimateRideRouteController = new RideEstimateRouteController(
  calculateRideUseCases
);

estimateRideRoute.post("/estimate", async (req: Request, res: Response) => {
  const { StatusCode, Descricao, Resposta } =
    await estimateRideRouteController.postRideEstimate(req.body!);

  res.status(StatusCode).json({ StatusCode, Descricao, Resposta });
});
