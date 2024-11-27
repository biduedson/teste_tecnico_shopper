"use client";

import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TravelOptions from "./TravelOptions";
import { IDriver } from "../_interfaces/Driver";
import { ICoordinates } from "../_interfaces/Coordinates";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "./ui/button";
import AlertError from "./AlertError";

const FormUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dataTravel, setDataTravel] = useState<any>();
  const [drivers, setDrivers] = useState<IDriver[] | []>([]);
  const [coordinates, setCoordinates] = useState<ICoordinates[] | []>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [idUser, setIdUser] = useState<string>("");
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string>("");

  const validationSchema = Yup.object().shape({
    customer_id: Yup.string().required("O ID do usuario é obrigatório"),
    origin: Yup.string().required("A origem é obrigatória"),
    destination: Yup.string().required("O destino é obrigatório"),
  });

  const initialValues = {
    customer_id: "",
    origin: "",
    destination: "",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any, { resetForm }: any) => {
    if (values.origin === values.destination) {
      setMessageAlert("Origem e destino não podem ser iguais");
      setIsOpenAlert(true);

      return;
    }
    setIsloading(true);
    try {
      const response = await fetch("/api/ride/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        resetForm();
        setIdUser(values.customer_id);
        setDataTravel(data);
        setDrivers(data.Resposta.options);
        const {
          latitude: destinationLatitude,
          longitude: destinationLongitude,
        } = data.Resposta.destination;

        const { latitude: originLatitude, longitude: originLongitude } =
          data.Resposta.origin;
        setCoordinates([
          {
            lat: destinationLatitude,
            lng: destinationLongitude,
          },
          {
            lat: originLatitude,
            lng: originLongitude,
          },
        ]);
        setIsOpen(true);
      } else {
        setMessageAlert(data.Resposta.error_description);
        setIsOpenAlert(true);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <>
      <div className="max-w-xl h-auto mx-auto p-10  bg-gray-800/80 shadow-md shadow-slate-600 rounded-sm">
        <h1 className="text-2xl font-bold mb-4 text-purple-600">
          Escolha seu Próximo Destino
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-3">
            <div>
              <label
                htmlFor="customer_id"
                className="block font-medium mb-1 text-gray-400"
              >
                ID:
              </label>
              <Field
                name="customer_id"
                type="text"
                className="border border-purple-600 active:border-blue-600 focus:border focus:border-purple-600 p-2 rounded bg-gray-900 w-full text-gray-400"
              />
              <ErrorMessage
                name="customer_id"
                component="div"
                className="text-purple-600 text-sm "
              />
            </div>

            <div>
              <label
                htmlFor="origin"
                className="block font-medium mb-1 text-gray-400"
              >
                Origem:
              </label>
              <Field
                name="origin"
                type="text"
                className="border border-purple-600 p-2 rounded w-full text-gray-400 bg-gray-900"
              />
              <ErrorMessage
                name="origin"
                component="div"
                className="text-purple-600 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="destination"
                className="block font-medium mb-1 text-gray-400"
              >
                Destino:
              </label>
              <Field
                name="destination"
                type="text"
                className="border  border-purple-600 p-2 rounded w-full text-gray-40 bg-gray-900"
              />
              <ErrorMessage
                name="destination"
                component="div"
                className="text-purple-600 text-sm"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="bg-purple-600 w-full text-white px-4 mt-2 shadow-sm shadow-slate-950 rounded hover:bg-purple-700 "
            >
              {isLoading ? (
                <span className="flex gap-1 text-sm">
                  <AiOutlineLoading3Quarters className="animate-spin" />
                  Loading...
                </span>
              ) : (
                "Enviar"
              )}
            </Button>
          </Form>
        </Formik>
      </div>
      <AlertError
        isOpen={isOpenAlert}
        setIsOpen={setIsOpenAlert}
        message={messageAlert}
        title="Erro ao Solicitar viagem."
      />

      {coordinates.length && (
        <TravelOptions
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dataDriver={drivers}
          pathPoints={coordinates}
          dataTravel={dataTravel}
          userId={idUser}
        />
      )}
    </>
  );
};

export default FormUser;
