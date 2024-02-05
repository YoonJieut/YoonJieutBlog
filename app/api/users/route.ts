import { db } from "@/models/index";
import { createUser } from "@/utils/userQueries";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const user = await createUser(db, req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: "Cannot create user", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
