import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page, perPage } = req.query;
  const itemsPerPage = Number(perPage) || 9; // Number of templates per page
  const currentPage = Number(page) || 1;

  const skip = (currentPage - 1) * itemsPerPage;

  try {
    const templates = await prisma.template.findMany({
      skip,
      take: itemsPerPage,
    });

    const totalTemplates = await prisma.template.count();
    const totalPages = Math.ceil(totalTemplates / itemsPerPage);

    res.status(200).json({ templates, totalPages, currentPage });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
