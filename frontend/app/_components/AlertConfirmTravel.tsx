import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { formatCurrency } from "../_helpers/price";

interface AlertActionProps {
  alertOpen: boolean;
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  price: number;
  driverName: string;
  alertFunctionAction: () => void;
}
const AlertConfirmTravel = ({
  alertOpen,
  alertFunctionAction,
  setAlertOpen,
  price,
  driverName,
}: AlertActionProps) => {
  return (
    <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
      <AlertDialogContent className="bg-slate-100 shadow-lg shadow-slate-600 rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-purple-600 sm:text-center">
            Deseja confirmar a viagem?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[16px] text-primary-300 sm:text-center">
            <p className="text-ls font-semibold">
              Ao confirmar a viagem sera solicidata
            </p>
            <div className="flex  gap-2 items-center justify-between px-2 my-4 ">
              <div className="flex flex-col w-[150px] gap-2 rounded-sm shadow-sm shadow-gray-600 p-2 ">
                <p className="text-slate-950">Motorista</p>
                <p className="font-semibold text-[12px] text-purple-600 ">
                  {driverName}
                </p>
              </div>
              <div className="flex flex-col w-[150px] gap-2 rounded-sm shadow-sm shadow-gray-600 p-2 ">
                <p className="text-slate-950">Valor da viagem</p>
                <p className="font-semibold text-[12px] text-purple-600 ">
                  {formatCurrency(price)}
                </p>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="text-black  hover:bg-slate-800 hover:text-white"
            onClick={() => setAlertOpen(false)}
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-purple-600"
            onClick={alertFunctionAction}
          >
            Aceitar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertConfirmTravel;
