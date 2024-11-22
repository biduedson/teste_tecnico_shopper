import { Driver } from "./Driver";

export interface DriverWithCost extends Driver {
  totalCost: string; // Valor total formatado
}
