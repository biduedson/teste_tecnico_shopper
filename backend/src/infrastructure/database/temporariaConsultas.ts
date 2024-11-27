//Para viagens de um usuário:

const user = await UserModel.findByPk(userId, {
  include: [{ model: TravelModel, as: "userTravels" }],
});

//Para viagens de um motorista
const driver = await DriverModel.findByPk(driverId, {
  include: [{ model: TravelModel, as: "driverTravels" }],
});

//Para reviews de um motorista:

const reviews = await DriverModel.findByPk(driverId, {
  include: [{ model: ReviewDriverModel, as: "driverReviews" }],
});
