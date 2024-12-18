"use client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
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
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  dataTravel: {};
  userId: string;
}

const TravelOptions = ({
  isOpen,
  setIsOpen,
  dataDriver,
  pathPoints,
  dataTravel,
  userId,
}: TravelOptionsProps) => {
  const pathArray = pathPoints.map((point) => [point.lat, point.lng]);

  const encodedPath = encode(pathArray);
  const imgUrl = `https://maps.googleapis.com/maps/api/staticmap?center=-23.553195,-46.6548316&zoom=7&size=600x300&path=color:0x0000ff|weight:5|fillcolor:0x00ff00|enc:${encodedPath}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  return (
    <>
      <AlertDialog open={isOpen}>
        <AlertDialogContent className="rounded-xl bg-gray-800 h-[80vh] lg:h-[90%] px-4">
          <AlertDialogHeader>
            <AlertDialogTitle className="w-full min-h-[180px]  shadow-lg   shadow-slate-500 rounded-lg ">
              {pathPoints.length && (
                <div className="relative w-full  min-h-[180px] ">
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
              <div className=" flex flex-col h-[380px]  my-4 gap-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
                {dataDriver.map((driver) => {
                  return (
                    <CardDriver
                      key={driver.id}
                      driver={driver}
                      dataTravel={dataTravel}
                      userId={userId}
                    />
                  );
                })}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              className="bg-purple-600 hover:bg-purple-950 w-full  shadow-lg shadow-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default TravelOptions;
