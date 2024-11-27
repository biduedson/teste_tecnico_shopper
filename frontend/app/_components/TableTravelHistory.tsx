"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../_components/ui/table";
import { formatData } from "../_helpers/formatData";
import { formatKm } from "../_helpers/formatKm";
import { formatTimetotal } from "../_helpers/formatTimetotal";
import { formatCurrency } from "../_helpers/price";

interface TableTravelHistoryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  travelHistory: any[];
}
const TableTravelHistory = ({ travelHistory }: TableTravelHistoryProps) => {
  return (
    <>
      <Table className="hidden lg:block w-full max-w-5xl mx-auto bg-gray-900 text-white shadow-lg shadow-slate-600 ">
        <TableHeader className="bg-gray-800 ">
          <TableRow>
            <TableHead className="p-4 text-left">
              Data e hora da viagem
            </TableHead>
            <TableHead className="p-4 text-left">Motorista</TableHead>
            <TableHead className="p-4 text-left">Origem</TableHead>
            <TableHead className="p-4 text-left">Destino</TableHead>
            <TableHead className="p-4 text-center">Distancia</TableHead>
            <TableHead className="p-4 text-center">Tempo</TableHead>
            <TableHead className="p-4 text-center">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {travelHistory.map((travel, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-800 transition-colors "
            >
              <TableCell className="p-4">
                {formatData(travel.dateAndTime)}
              </TableCell>
              <TableCell className="p-4">{travel.driverName}</TableCell>
              <TableCell className="p-4">{travel.origin}</TableCell>
              <TableCell className="p-4">{travel.destination}</TableCell>
              <TableCell className="p-4">{formatKm(travel.distance)}</TableCell>
              <TableCell className="p-4">
                {formatTimetotal(travel.time)}
              </TableCell>
              <TableCell className="p-4 flex  justify-center text-lg text-purple-600 font-bold">
                {formatCurrency(travel.value)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableTravelHistory;
