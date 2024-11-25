"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../_components/ui/select";
import { ITravelHistory } from "../_interfaces/TravelHistory";
interface OptionsSelectorPros {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  historyTravel: ITravelHistory[];
  handlechange: (value: string) => void;
}
const OptionsSelector = ({
  historyTravel,
  handlechange,
}: OptionsSelectorPros) => {
  const [selectedDriver, setSelectedDriver] = useState<string>("");
  const handleSelectChange = (value: string) => {
    setSelectedDriver(value);
    handlechange(value);
  };

  return (
    <Select onValueChange={handleSelectChange} value={selectedDriver}>
      <SelectTrigger className="w-full bg-slate-100 h-[40px] border-[2px]  border-purple-600">
        <SelectValue placeholder="Selecione  o motorista" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            className="text-slate-950 font-bold"
            key="todos"
            value={"ddddd"}
          >
            Mostrar todos
          </SelectItem>
          <SelectLabel className="text-purple-600 font-bold text-xl">
            Motoristas:
          </SelectLabel>
          {historyTravel.map((driver) => (
            <SelectItem key={driver.driverName} value={String(driver.driverId)}>
              {driver.driverName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default OptionsSelector;
