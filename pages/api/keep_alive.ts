import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tisainApiSecret = req.headers['x-tisain-api-secret'];

    if (tisainApiSecret !== process.env.TISAIN_API_SECRET) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const row = await prisma.keep_alive_table.findUnique({ where: { id: 'unique_row_id' } });

    if (!row) {
      throw new Error('Record not found');
    }

    const counter = row.counter || 0;

    const updatedRow = await prisma.keep_alive_table.update({
      where: { id: 'unique_row_id' },
      data: { counter: counter + 1 },
    });

    res.status(200).json(updatedRow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
