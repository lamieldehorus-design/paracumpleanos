const fs = require('fs');
const path = require('path');

const mama = require('./data/mama.cjs');
const papa = require('./data/papa.cjs');
const { pareja, hija, hijo, lejos } = require('./data/group1.cjs');
const { hermano, primo, tio, tia, abuelo, abuela } = require('./data/group2.cjs');

const categoryMap = {
  'mensajes-de-cumpleanos-para-mama': mama,
  'mensajes-de-cumpleanos-para-papa': papa,
  'mensajes-de-cumpleanos-para-mi-pareja': pareja,
  'mensajes-de-cumpleanos-para-una-hija': hija,
  'mensajes-de-cumpleanos-para-un-hijo': hijo,
  'mensajes-de-cumpleanos-para-alguien-lejos': lejos,
  'mensajes-de-cumpleanos-para-un-hermano': hermano,
  'mensajes-de-cumpleanos-para-un-primo': primo,
  'mensajes-de-cumpleanos-para-un-tio': tio,
  'mensajes-de-cumpleanos-para-una-tia': tia,
  'mensajes-de-cumpleanos-para-un-abuelo': abuelo,
  'mensajes-de-cumpleanos-para-una-abuela': abuela,
};

const jsonPath = path.join(__dirname, '../data/relationship_messages.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

let totalReplaced = 0;

for (const [slug, richList] of Object.entries(categoryMap)) {
  if (!data[slug]) {
    console.error(`Category ${slug} not found!`);
    continue;
  }
  const category = data[slug];
  console.log(`Processing ${slug}: current total = ${category.messages.length}, new rich items = ${richList.length}`);

  if (richList.length !== 59) {
    console.warn(`Warning: ${slug} has ${richList.length} items instead of 59!`);
  }

  // Replace messages 101 to 159 (indices 100 to 158)
  for (let i = 0; i < richList.length; i++) {
    const targetIdx = 100 + i;
    const msgNum = 101 + i;
    const item = richList[i];
    
    // Validate sentences: count periods or exclamation/question marks
    const sentences = item.text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
    if (sentences.length < 3) {
      console.warn(`Short text in ${slug} msg ${msgNum} (${sentences.length} sentences): "${item.text.slice(0, 60)}..."`);
    }

    const updatedMsg = {
      id: `mensaje-${msgNum}`,
      title: item.title,
      text: item.text,
    };

    if (category.messages[targetIdx]) {
      category.messages[targetIdx] = updatedMsg;
    } else {
      category.messages.push(updatedMsg);
    }
    totalReplaced++;
  }

  console.log(`Updated ${slug}: now has ${category.messages.length} messages.`);
}

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${totalReplaced} messages with deep, substantive content across all 12 categories!`);
