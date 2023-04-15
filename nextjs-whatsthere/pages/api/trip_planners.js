import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const trips = await prisma.trip_planners.findMany()
  res.status(200).json(trips);
}