const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

async function insertTemplates(filePath) {
  const prisma = new PrismaClient();

  try {
    // Read the JSON file
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Iterate over each JSON object in the array
    for (const json of jsonData) {
      // Extract values from the JSON object
      const { author, thumbnail, title, images, tags } = json;

      // Create a new template record
      const template = await prisma.template.create({
        data: {
          author,
          thumbnail,
          title,
          images: {
            create: images.map(imageUrl => ({ imageUrl })),
          },
          tags: {
            connectOrCreate: tags.map(tag => ({
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
  } catch (error) {
    console.error('Error inserting templates:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Usage: Call insertTemplates with the file path to the JSON data
const jsonFilePath = 'file.json';
insertTemplates(jsonFilePath);
