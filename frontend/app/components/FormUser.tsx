"use client";

import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TravelOptions from "./TravelOptions";
import { IDriver } from "../_interfaces/Driver";
import { ICoordinates } from "../_interfaces/Coordinates";

const FormUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataDriver, setDataDriver] = useState([]);
  const [drivers, setDrivers] = useState<IDriver[] | []>([]);
  const [coordinates, setCoordinates] = useState<ICoordinates[] | []>([]);

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

  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      const response = await fetch("http://localhost:8080/ride/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Dados enviados com sucesso!");
        resetForm();
        console.log(data);
        setDataDriver(data);
        setDrivers(data.Resposta.options);
        setCoordinates([
          {
            lat: data.Resposta.destination.latitude,
            lng: data.Resposta.destination.longitude,
          },
          {
            lat: data.Resposta.origin.latitude,
            lng: data.Resposta.origin.longitude,
          },
        ]);
      } else {
        alert(data.Descricao);
        console.log(data);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="max-w-xl h-auto mx-auto mt-10 p-10  bg-gray-800 shadow-md shadow-slate-400 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-slate-950">
          Escolha seu Próximo Destino
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 ">
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
                  className="text-red-500 text-sm "
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
                  className="text-red-500 text-sm"
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
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 "
              >
                Enviar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 "
                onClick={() => setIsOpen(true)}
              >
                Abir modal
              </button>
            </Form>
          )}
        </Formik>
      </div>
      {coordinates.length && (
        <TravelOptions
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dataDriver={drivers}
          pathPoints={coordinates}
        />
      )}
    </>
  );
};

export default FormUser;
