import { db } from "../../../util/db.server";

export default async function handler(req, res) {
  const id = Number(req.query.listId);
  console.log("req.query.attractionId: ", id);
  console.log("req.method: ", req.method);

  if (req.method === "DELETE") {
    try {
      const attractions = await db.attractions.deleteMany({
        where: {
          listId: id,
        },
      });

      const lists = await db.lists.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: `List with id ${id} deleted, and attractions with listId ${id} deleted` });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: `Error deleting attractions with listid ${id}` });
    }
  }
}