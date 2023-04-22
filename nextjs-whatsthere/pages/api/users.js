import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const user = await prisma.users.create({
    data: {
      email: 'elsa@prisma.ios',
      name: 'Elsa Prisma',
      password: '1231',
      address: '1000 Lookout RD',
      city: 'Vancouver',
    }
  })
  const users = await prisma.users.findMany()
  console.log(req.body);
  if(req.method === "PUT") {
    const user = await prisma.users.create({
      data: req.body
    });
  }
  res.status(200).json(users);
}

