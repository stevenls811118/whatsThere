import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const destinations = await prisma.destinations.findMany()
  res.status(200).json(destinations);
}