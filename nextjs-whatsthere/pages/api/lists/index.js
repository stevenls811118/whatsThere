import { db } from "../../../util/db.server";

export default async function handler(req, res) {
  // console.log(req.body, req.method);
  if (req.method === "POST") {
    const { name, userId } = req.body;
    const newList = await db.lists.create({
      data: {
        name: name,
        user: {
          connect: { id: userId },
        },
      },
    });
    res.status(200).json(newList);
  }

  if (req.method === "PUT") {
    console.log(req.body, req.method);

    const userId = Number(req.body.userId);
    console.log(userId);
    try {
      const lists = await db.lists.findMany({
        where: {
          userId: userId,
        },
      });
      console.log(lists);
      res.status(200).json(lists);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error getting lists" });
    }
  }
}
