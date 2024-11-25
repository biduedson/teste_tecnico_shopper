"use client";

import { useState } from "react";
import { formatCurrency } from "../_helpers/price";
import { IDriver } from "../_interfaces/Driver";
import { ITravelConfirm } from "../_interfaces/TravelConfirm";
import RatingStar from "./RatingStar";
import { Button } from "./ui/button";
import AlertConfirmTravel from "./AlertConfirmTravel";
import { useRouter } from "next/navigation";
interface ICardDriverProps {
  driver: IDriver;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataTravel: any;
  userId: string;
}
const CardDriver = ({ driver, dataTravel, userId }: ICardDriverProps) => {
  const router = useRouter();
  const [alertOpen, setAlerOpen] = useState<boolean>(false);
  const { start_address, end_address, distance, duration } =
    dataTravel.Resposta.routeResponse.routes[0].legs[0];

  const travelconfirmed: ITravelConfirm = {
    customer_id: userId,
    origin: start_address,
    destination: end_address,
    distance: distance.value,
    duration: String(duration.value),
    driver: {
      id: driver.id,
      name: driver.name,
    },
    value: driver.value,
  };

  const confirmTravelFetch = async (travel: ITravelConfirm) => {
    try {
      const response = await fetch("/api/ride/confirm", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(travel),
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const data = await response.json();
      if (response.ok) {
        console.log("ok");
      }
    } catch (error) {
      console.error("Erro ao Confirmar viagem:", error);
    } finally {
      router.push("/travelhistory");
    }
  };
  return (
    <>
      <div className="  bg-slate-100 rounded-lg text-purple-600">
        <div className="flex flex-col gap-2 p-2 ">
          <div className="flex items-center justify-between px-2 shadow-sm shadow-gray-600 p-2 rounded-sm ">
            <div className="flex flex-col ">
              <p className="text-slate-950">Nome do motorista</p>
              <p className="font-semibold text-[12px] ">{driver.name}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-slate-950">Veículo</p>
              <p className="font-semibold text-[12px] ">{driver.vehicle}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1  ">
            <div className="rounded-sm shadow-sm shadow-gray-600 p-2">
              <p className="text-slate-950">Descrição</p>
              <p className="font-semibold text-[12px] ">{driver.description}</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 my-2 justify-between ">
            <div className="flex flex-col gap-2 rounded-sm shadow-sm shadow-gray-600 p-2 ">
              <div className="flex gap-2 items-center">
                <p className="text-slate-950">Avaliação</p>
                <RatingStar rating={driver.review.rating} />
              </div>
              <p className="text-purple-600">{driver.review.comment}</p>
            </div>
          </div>
          <div className="flex  items-center justify-between px-2">
            <div>
              <p className="text-slate-950">Valor da viagem</p>
              <p className="font-semibold text-[12px] ">
                {formatCurrency(driver.value)}
              </p>
            </div>

            <Button
              className="my-2 w-[80px]  bg-purple-600 hover:bg-purple-950"
              onClick={() => setAlerOpen(true)}
            >
              Escolher
            </Button>
          </div>
        </div>
      </div>
      <AlertConfirmTravel
        alertOpen={alertOpen}
        setAlertOpen={setAlerOpen}
        driverName={travelconfirmed.driver.name}
        price={travelconfirmed.value}
        alertFunctionAction={() => confirmTravelFetch(travelconfirmed)}
      />
    </>
  );
};

export default CardDriver;
