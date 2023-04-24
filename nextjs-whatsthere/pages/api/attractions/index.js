import { db } from "../../../util/db.server";

export default async function handler(req, res) {
  console.log(req.body, req.method);

  if (req.method === "PUT") {
    try {
      const attraction = await db.attractions.create({
        data: req.body,
      });
      const message = `Adding ${attraction}`;
      res.status(200).json({ message: message });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error Adding attraction" });
    }
  }

  if (req.method === "GET") {
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
