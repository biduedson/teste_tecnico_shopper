import dotenv from "dotenv";
dotenv.config({ path: "../.env" }); // Caminho para o arquivo .env na raiz do projeto

import { Request, Response } from "express";

import express from "express";
import axios from "axios";
import { estimateRideRoute } from "./infrastructure/http/routes/estimateRide";

const app = express();
app.use(express.json());

app.use("/ride", estimateRideRoute);

const PORT = 8080;
export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

/* try {
      // Chamar a API Routes do Google Maps
      const response = await axios.get(
        "https://maps.googleapis.com/maps/api/directions/json",
        {
          params: {
            origin,
            destination,
            key: GOOGLE_API_KEY,
          },
        }
      );

      const routes = response.data.routes;
      if (!routes || routes.length === 0) {
        return res
          .status(400)
          .json({ error: "Não foi possível calcular a rota." });
      }

      // Obter a distância em quilômetros (primeira rota)
      const distanceMeters: number = routes[0].legs[0].distance.value; // Distância em metros
      const distanceKm: number = distanceMeters / 1000; // Converter para km

      // Filtrar motoristas que aceitam a distância mínima
       drivers
        .filter((driver) => distanceKm >= driver.minKm)
        .map((driver) => ({
          ...driver,
          totalCost: (distanceKm * driver.ratePerKm).toFixed(2), // Custo total
        }));

      // Retornar os motoristas disponíveis
      const responseData: CalculateRouteResponse = {
        origin,
        destination,
        distanceKm,
        drivers: availableDrivers,
      };

      res.json(response.data.routes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao calcular a rota.", erro: error });
    }
  }
);*/

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
