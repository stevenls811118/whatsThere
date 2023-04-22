import { db } from "../../util/db.server";

export default async function handler(req, res) {

  console.log(req.body, req.method);
  if (req.method === 'PUT') {
    const attraction = await db.attractions.create({
      data: req.body,
    })
  }
  const attractions = await db.attractions.findMany({
    where: {
      listId: 1,
    },
  })
  res.status(200).json(attractions);
}