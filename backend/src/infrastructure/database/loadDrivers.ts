import { DriverModel } from "./models/DriverModel"; // aqui carrego ja uma lista de drivers para pre carregam,ente de motoristas .
import { ReviewDriverModel } from "./models/ReviewDriverModel";
import { newdrivers } from "./mockDrivers";

export const loadDrivers = async () => {
  try {
    // Aqui estou verificando se algum motorista já existe para evitar duplicação
    for (const driver of newdrivers) {
      const existingDriver = await DriverModel.findOne({
        where: { name: driver.name },
      });

      // Se o motorista não existir, ai adiciono elee
      if (!existingDriver) {
        const newDriver = await DriverModel.create({
          name: driver.name,
          description: driver.description,
          vehicle: driver.vehicle,
          ratePerKm: driver.ratePerKm,
          minKm: driver.minKm,
        });
        console.log(`Motorista ${driver.name} adicionado com sucesso!`);
        driver.reviews.map(async (review) => {
          await ReviewDriverModel.create({
            rating: review.comment,
            comment: review.rating,
            driver_id: newDriver.id,
          });
        });
      } else {
        console.log(`Motorista ${driver.name} já existe. Pulando inserção.`);
      }
    }
  } catch (error) {
    console.error("Erro ao carregar motoristas:", error);
  }
};
