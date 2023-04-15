import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const attractions = await prisma.attractions.findMany()
  res.status(200).json(attractions);
}