import { db } from "../../../util/db.server";

export default async function handler(req, res) {
  const id = Number(req.query.attractionId);
  console.log("req.query.attractionId: ", id);
  console.log("req.method: ", req.method);

  if (req.method === "DELETE") {
    try {
      const attractions = await db.attractions.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: `Attraction with id ${id} deleted` });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: `Error deleting attraction with id ${id}` });
    }
  }
}
