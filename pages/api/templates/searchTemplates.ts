import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async function searchHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { searchInput } = req.query;

    try {
      const templates = await prisma.template.findMany({
        where: {
          OR: [
            {
              title: {
                contains: String(searchInput).toLowerCase(),
              },
            },
            {
              author: {
                contains: String(searchInput).toLowerCase(),
              },
            },
            {
              tags: {
                some: {
                  name: {
                    contains: String(searchInput).toLowerCase(),
                  },
                },
              },
            },
          ],
        },
        select: {
          thumbnail: true,
          title: true,
          slug: true,
        },
      });

      res.status(200).json(templates);
    } catch (error) {
      console.error('Error searching templates:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
