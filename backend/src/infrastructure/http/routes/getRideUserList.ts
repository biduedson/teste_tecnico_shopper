import { query, Router } from "express";
import { RideUserlisRepositoryImpl } from "../../database/repositories/implementations/RideUserlisRepositoryImpl";
import { RideUserListUseCasesImpl } from "../../../application/useCases/implementations/RideUserListUseCasesImpl";
import { RideUserListController } from "../controllers/RideUserListController";
import { Request, Response } from "express";

export const getRideUserList = Router();

const rideUserListRepository = new RideUserlisRepositoryImpl();
const rideUserListUseCases = new RideUserListUseCasesImpl(
  rideUserListRepository
);
const rideUserListController = new RideUserListController(rideUserListUseCases);

getRideUserList.get("/:customer_id", async (req: Request, res: Response) => {
  console.log("ola");
  const { customer_id } = req.params; // Parâmetro de rota
  const { driverId } = req.query; // Query parameter
  const { StatusCode, Descricao, Resposta } =
    await rideUserListController.getRideUserList({
      params: String(customer_id),
      query: Number(driverId),
    });
  res.json({ StatusCode, Descricao, Resposta });
});
