import dotenv from "dotenv";
dotenv.config({ path: "../.env" }); // Caminho para o arquivo .env na raiz do projeto
import cors from "cors";

import express from "express";
import { estimateRideRoute } from "./infrastructure/http/routes/estimateRide";
import sequelize from "./infrastructure/database/sequelize";
import { travelConfirmRoute } from "./infrastructure/http/routes/travelConfirmRoute";
import { getRideUserList } from "./infrastructure/http/routes/getRideUserList";
import { loadDrivers } from "./infrastructure/database/loadDrivers";

const app = express();
app.use(cors());

app.use(cors());
app.use(express.json());

app.use("/ride", estimateRideRoute);
app.use("/ride", travelConfirmRoute);
app.use("/ride", getRideUserList);

const PORT = 8080;
export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Banco de dados sincronizado.");

    await loadDrivers();
    console.log("Dados dos motoristas carregados com sucesso.");

    app.listen(PORT, () => {
      console.log(`Backend rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error);
  }
})();
