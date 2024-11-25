"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

import { ITravelHistory } from "../_interfaces/TravelHistory";
import { Button } from "../_components/ui/button";
import SearchUser from "../_components/SearchTravel";
import TableTravelHistory from "../_components/TableTravelHistory";
import { formatCurrency } from "../_helpers/price";
import { formatKm } from "../_helpers/formatKm";
import { formatTimetotal } from "../_helpers/formatTimetotal";
import OptionsSelector from "../_components/OptionsSelector";
const Page = () => {
  const [travelHistory, setTravelHistory] = useState<ITravelHistory[] | []>([]);
  const [userId, setUserId] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openAlert, setOpenAlert] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState<string>("");

  const handleUserInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setUserId(value);
  };

  const handleDriverChange = (value: string) => {
    setSelectedDriver(value);
  };
  const showHistoriTravelFetch = async (userId: string, driverId?: number) => {
    try {
      const response = await fetch(
        `/api/ride/${userId}?driverId=${driverId ? driverId : ""}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const history = data.Resposta.map((travel: any) => {
          return {
            dateAndTime: travel.createdAt,
            driverName: travel.driver.name,
            driverId: travel.driver.id,
            origin: travel.origin,
            destination: travel.destination,
            distance: travel.distance,
            time: travel.duration,
            value: travel.value,
          };
        });
        setOpenAlert(true);
        setTravelHistory(history);
      } else {
        alert(data.Resposta.error_description);
        setTravelHistory([]);
      }
    } catch (error) {
      console.error("Erro", error);
    }
  };
  return (
    <div className=" max-w-5xl mx-auto flex flex-col items-center h-full overflow-y-auto scrollbar-hide">
      <h1 className="uppercase text-purple-600 text-xl font-bold my-4">
        Histórico de viagens
      </h1>

      <div className=" w-full flex items-center justify-center gap-2  my-4">
        <SearchUser
          handleInputChange={handleUserInputChange}
          placeHolder="Informe o id do usuario"
        />

        <OptionsSelector
          historyTravel={travelHistory}
          handlechange={handleDriverChange}
        />
        <Button
          className="  bg-purple-600 h-[40px] flex gap-1"
          onClick={() => showHistoriTravelFetch(userId, Number(selectedDriver))}
        >
          <IoSearch />
          Buscar
        </Button>
      </div>
      <div className="w-full max-w-5xl mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div
          className={` bg-purple-600 p-4 rounded-lg  flex flex-col items-center text-white shadow-lg shadow-slate-600`}
        >
          <p> Total de Viagens encontradas</p>
          <span className="font-bold text-xl text-center">
            {travelHistory.length}
          </span>
        </div>
        <div
          className={` bg-purple-600 p-4 rounded-lg  flex flex-col items-center text-white shadow-lg shadow-slate-600`}
        >
          <p> Total gasto com viagens</p>
          <span className="font-bold text-xl text-center">
            {formatCurrency(
              travelHistory
                .flatMap((item) => item.value)
                .reduce((sum, obj) => sum + obj.valueOf(), 0)
            )}
          </span>
        </div>
        <div
          className={` bg-purple-600 p-4 rounded-lg  flex flex-col items-center text-white shadow-lg shadow-slate-600`}
        >
          <p>Total de kilometros viajados</p>
          <span className="font-bold text-xl text-center ">
            {formatKm(
              travelHistory
                .flatMap((item) => item.distance)
                .reduce((sum, obj) => sum + obj.valueOf(), 0)
            )}
          </span>
        </div>
        <div
          className={` bg-purple-600 p-4 rounded-lg  flex flex-col items-center text-white shadow-lg shadow-slate-600`}
        >
          <p>Total de horas viajados</p>
          <span className="font-bold text-xl text-center">
            {formatTimetotal(
              travelHistory
                .flatMap((item) => Number(item.time))
                .reduce((sum, obj) => sum + obj, 0)
            )}
          </span>
        </div>
      </div>
      <TableTravelHistory travelHistory={travelHistory} />
    </div>
  );
};

export default Page;
