import dotenv from "dotenv";
dotenv.config({ path: "../.env" }); // Caminho para o arquivo .env na raiz do projeto
import cors from "cors";

import express from "express";
import { estimateRideRoute } from "./infrastructure/http/routes/estimateRide";
import sequelize from "./infrastructure/database/sequelize";
import { ridecofirmRoutes } from "./infrastructure/http/routes/rideConfirm";
import { getRideUserList } from "./infrastructure/http/routes/getRideUserList";

const app = express();
app.use(cors());

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/ride", estimateRideRoute);
app.use("/ride", ridecofirmRoutes);
app.use("/ride", getRideUserList);

const PORT = 8080;
export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Banco de dados sincronizado.");

    app.listen(PORT, () => {
      console.log(`Backend rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error);
  }
})();
