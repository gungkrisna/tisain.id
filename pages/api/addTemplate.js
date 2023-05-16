import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import path from 'path';

function generateSlug(title) {
  const lowercaseTitle = title.toLowerCase();
  const slug = lowercaseTitle.replace(/\s+/g, '-');
  const randomCharacter = Math.random().toString(36).substring(2, 8);
  return `${slug}-${randomCharacter}`;
}

export default async function insertTemplates(req, res) {
  const prisma = new PrismaClient();

  try {
    // Read the JSON file
    const filePath = path.join(process.cwd(), 'file.json');
    const jsonData = JSON.parse(readFileSync(filePath, 'utf8'));

    // Iterate over each JSON object in the array
    for (const json of jsonData) {
      // Extract values from the JSON object
      const { author, thumbnail, title, images, tags } = json;

      // Create a new template record with slug
      const slug = generateSlug(title);
      const template = await prisma.template.create({
        data: {
          author,
          thumbnail,
          title,
          slug,
          images: {
            create: images.map((imageUrl) => ({ imageUrl })),
          },
          tags: {
            connectOrCreate: tags.map((tag) => ({
              where: { name: tag },
              create: { name: tag },
            })),
          },
        },
        include: {
          images: true,
          tags: true,
        },
      });

      console.log('Template created:', template);
    }

    res.json({ message: 'Templates created successfully' });
  } catch (error) {
    console.error('Error inserting templates:', error);
    res.status(500).json({ error: 'An error occurred while inserting templates', details: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
