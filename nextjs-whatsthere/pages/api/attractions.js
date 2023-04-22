import { db } from "../../util/db.server";


export default async function handler(req, res) {

  const attractions = await db.attractions.findMany()
  console.log(req.body, req.method);
  if (req.method === 'PUT') {
    const attraction = await db.attractions.create({
      data: req.body,
    })
  }
  res.status(200).json(attractions);
}