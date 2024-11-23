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

  const { StatusCode, Descricao, Resposta } =
    await rideUserListController.getRideUserList({
      params: req.params,
      query: req.query,
    });
  res.status(StatusCode).json({ StatusCode, Descricao, Resposta });
});
