import "dotenv/config";
import express from "express";

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
