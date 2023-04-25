import { db } from "../../util/db.server";

export default async function handler(req, res) {
  
  console.log(req.body);
  if (req.method === "GET") {
    try {
      const users = await db.users.findMany();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error getting users" });
    }
  }

  if(req.method === "PUT") {
    try {
      const user = await db.users.create({
        data: req.body
      });
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Can not update user "})
    }    
  }
}

