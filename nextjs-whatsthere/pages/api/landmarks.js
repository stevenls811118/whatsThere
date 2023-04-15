import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const landmarks = await prisma.landmarks.findMany()
  res.status(200).json(landmarks);
}