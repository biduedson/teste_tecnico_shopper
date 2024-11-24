"use client";

import { formatCurrency } from "../_helpers/price";
import { IDriver } from "../_interfaces/Driver";
import RatingStar from "./RatingStar";
import { Button } from "./ui/button";
interface ICardDriverProps {
  driver: IDriver;
}
const CardDriver = ({ driver }: ICardDriverProps) => {
  return (
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

          <Button className="my-2 w-[80px]  bg-purple-600 hover:bg-purple-950">
            Escolher
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardDriver;
