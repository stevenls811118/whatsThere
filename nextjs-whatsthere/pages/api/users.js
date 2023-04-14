import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const users = await prisma.users.findMany()
  res.status(200).json(users);
}

