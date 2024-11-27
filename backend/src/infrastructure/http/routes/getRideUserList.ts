import { query, Router } from "express";
import { RideUserlisRepositoryImpl } from "../../database/repositories/implementations/RideUserlisRepositoryImpl";
import { UserTravelListUseCasesImpl } from "../../../application/useCases/implementations/UserTravelListUseCasesImpl";
import { UserTravelListController } from "../controllers/UserTravelListController";
import { Request, Response } from "express";

export const getRideUserList = Router();

const rideUserListRepository = new RideUserlisRepositoryImpl();
const rideUserListUseCases = new UserTravelListUseCasesImpl(
  rideUserListRepository
);
const rideUserListController = new UserTravelListController(
  rideUserListUseCases
);

getRideUserList.get("/:customer_id", async (req: Request, res: Response) => {
  console.log("ola");

  const { StatusCode, Descricao, Resposta } =
    await rideUserListController.getRideUserList({
      params: req.params,
      query: req.query,
    });
  res.status(StatusCode).json({ StatusCode, Descricao, Resposta });
});
