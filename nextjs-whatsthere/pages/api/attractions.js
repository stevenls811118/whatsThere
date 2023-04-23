import { db } from "../../util/db.server";

export default async function handler(req, res) {
  console.log(req.body, req.method);

  if (req.method === 'PUT') {
    const attraction = await db.attractions.create({
      data: req.body,
    });
  }

  if (req.method === "DELETE") {
    try {
      const { name } = req.body;
      const attractions = await db.attractions.deleteMany({
        where: {
          listId: 1,
          name,
        },
      });
      res.status(200).json({ message: `Attraction with name ${name} deleted` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting attraction" });
    }
  }

  if (req.method === 'GET') {
    try {
      const attractions = await db.attractions.findMany({
        where: {
          listId: 1,
        },
      });
      res.status(200).json(attractions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error getting attractions" });
    }
  }
}