import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const totalTemplates = await prisma.template.count();
    res.status(200).json({ totalTemplates });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}