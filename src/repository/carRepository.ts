import prisma from "../config/database.js";

async function getCars() {
  return prisma.cars.findMany();
}

async function getCar(id: number) {
  return prisma.cars.findUnique({
    where: {
      id: 1
    }
  });
}

async function getCarWithLicensePlate(licensePlate: string) {
  return [];
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  return [];
}

async function deleteCar(id: number) {
  return [];
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;