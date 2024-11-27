import React from "react";
import { formatCurrency } from "../_helpers/price";
import { formatTimetotal } from "../_helpers/formatTimetotal";
import { formatKm } from "../_helpers/formatKm";
import { motion } from "framer-motion";
import { fadeIn } from "../_lib/variants";
import { ITravelHistory } from "../_interfaces/TravelHistory";

interface TravelCardProps {
  travelHistory: ITravelHistory[];
  setTravelHistory: React.Dispatch<React.SetStateAction<ITravelHistory[]>>;
}

const TravelCard = ({ travelHistory }: TravelCardProps) => {
  return (
    <div className="lg:hidden">
      {travelHistory.length > 0 && (
        <motion.section
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  my-2"
        >
          {travelHistory.map((item, index) => (
            <div
              key={index}
              className="bg-purple-600 text-white p-6 rounded-lg shadow-lg "
            >
              <h3 className="text-2xl font-semibold flex justify-between mb-4">
                <span className="font-medium">Motorista:</span>
                <span>{item.driverName}</span>
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between bg-white rounded-lg text-slate-950 shadow-lg shadow-slate-600 p-2">
                  <span className="font-bold">Origem:</span>
                  <span className="font-bold text-purple-600">
                    {item.origin}
                  </span>
                </div>
                <div className="flex justify-between bg-white rounded-lg text-slate-950 shadow-lg shadow-slate-600 p-2">
                  <span className="font-bold ">Destino:</span>
                  <span className="font-bold text-purple-600">
                    {item.destination}
                  </span>
                </div>
                <div className="flex justify-between bg-white rounded-lg text-slate-950 shadow-lg shadow-slate-600 p-2">
                  <span className="font-bold ">Distância:</span>
                  <span className="font-bold text-purple-600">
                    {formatKm(item.distance)} km
                  </span>
                </div>

                <div className="flex justify-between bg-white rounded-lg text-slate-950 shadow-lg shadow-slate-600 p-2">
                  <span className="font-medium ">Valor:</span>
                  <span className="font-bold text-purple-600">
                    {formatCurrency(item.value)}{" "}
                  </span>
                </div>
                <div className="flex justify-between bg-white rounded-lg text-slate-950 shadow-lg shadow-slate-600 p-2">
                  <span className="font-medium ">Tempo de Viagem:</span>
                  <span className="font-bold text-purple-600">
                    {formatTimetotal(Number(item.time))}{" "}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.section>
      )}
    </div>
  );
};

export default TravelCard;
