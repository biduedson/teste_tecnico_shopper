import { Router } from "express";
import { Request, Response } from "express";
import { EstimateRideRouteController } from "../controllers/EstimateRideRouteController";
import { CalculateRideRepositoryImpl } from "../../database/repositories/implementations/CalculateRideRepositoryImpl";
import { CalculateRideUseCaseImpl } from "../../../application/useCases/implementations/CalculateRideUseCaseImpl";
import { AddressValidationService } from "../../../domain/services/validation/AddressValidationServiceImpl";

export const estimateRideRoute = Router();

const calculateRideRepository = new CalculateRideRepositoryImpl();
const addressValidationService = new AddressValidationService();
const calculateRideUseCases = new CalculateRideUseCaseImpl(
  calculateRideRepository,
  addressValidationService
);

const estimateRideRouteController = new EstimateRideRouteController(
  calculateRideUseCases
);

estimateRideRoute.post("/estimate", async (req: Request, res: Response) => {
  const { StatusCode, Descricao, Resposta } =
    await estimateRideRouteController.postRideEstimate(req.body!);

  res.status(StatusCode).json({ StatusCode, Descricao, Resposta });
});
