"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";
import Image from "next/image";
import { Button } from "./ui/button";
import { encode } from "@googlemaps/polyline-codec";
import { IDriver } from "../_interfaces/Driver";
import { ICoordinates } from "../_interfaces/Coordinates";
import CardDriver from "./CardDriver";

interface TravelOptionsProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataDriver: IDriver[];
  pathPoints: ICoordinates[];
}

const TravelOptions = ({
  isOpen,
  setIsOpen,
  dataDriver,
  pathPoints,
}: TravelOptionsProps) => {
  //const pathPoints = [
  // { lat: -23.5515002, lng: -46.6508683 },
  // { lat: -23.2683785, lng: -46.7432632 },
  //];
  if (pathPoints.length) {
  }
  const pathArray = pathPoints.map((point) => [point.lat, point.lng]);

  const encodedPath = encode(pathArray);
  const imgUrl = `https://maps.googleapis.com/maps/api/staticmap?center=-23.553195,-46.6548316&zoom=9&size=600x300&path=color:0x0000ff|weight:5|fillcolor:0x00ff00|enc:${encodedPath}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  return (
    <>
      <AlertDialog open={isOpen}>
        <AlertDialogContent className="rounded-xl bg-gray-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="w-full h-[250px] lg:h-[200px] shadow-lg   shadow-slate-500 rounded-lg ">
              {pathPoints.length && (
                <div className="relative w-full  h-full ">
                  <Image
                    src={imgUrl}
                    alt="map"
                    layout="fill"
                    className="absolute object-cover rounded-lg"
                  />
                </div>
              )}
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="p-2 flex flex-col h-[180px] gap-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
                {dataDriver.map((driver) => {
                  return <CardDriver key={driver.id} driver={driver} />;
                })}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              className="border-purple-600 w-full"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default TravelOptions;
