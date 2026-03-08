const fs = require('fs');
const path = require('path');

const PEXELS_API_KEY = 'gOLCC4VX8HT6Z9Uw9yDlXtt1BMHQJ9MIq3iwBJMxmr2XNiSblMSQv2nO';
const COUNTRIES_DIR = path.join(__dirname, '..', 'data', 'countries');

const delay = (ms) => new Promise(r => setTimeout(r, ms));

async function searchPexels(query) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query + ' food')}&per_page=1&orientation=landscape`;
  const res = await fetch(url, {
    headers: { 'Authorization': PEXELS_API_KEY }
  });
  if (!res.ok) {
    console.log(`  Pexels API error ${res.status} for "${query}"`);
    return null;
  }
  const data = await res.json();
  if (data.photos && data.photos.length > 0) {
    const id = data.photos[0].id;
    return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;
  }
  return null;
}

async function processCountryFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changes = [];

  // Check if mainDish imageUrl already uses pexels
  const mainDishHasPexels = /mainDish:\s*\{[\s\S]*?imageUrl:\s*['"]https:\/\/images\.pexels\.com/.test(content);
  const dessertHasPexels = /dessert:\s*\{[\s\S]*?imageUrl:\s*['"]https:\/\/images\.pexels\.com/.test(content);

  if (!mainDishHasPexels) {
    const mainDishMatch = content.match(/mainDish:\s*\{[^}]*?name:\s*['"]([^'"]+)['"]/s);
    if (mainDishMatch) {
      const dishName = mainDishMatch[1];
      await delay(2000);
      const newUrl = await searchPexels(dishName);
      if (newUrl) {
        content = content.replace(
          /(mainDish:\s*\{[\s\S]*?imageUrl:\s*['"])[^'"]*(['"])/,
          `$1${newUrl}$2`
        );
        changes.push(`mainDish: ${dishName}`);
      }
    }
  } else {
    changes.push('mainDish: already pexels, skipped');
  }

  if (!dessertHasPexels) {
    const dessertMatch = content.match(/dessert:\s*\{[^}]*?name:\s*['"]([^'"]+)['"]/s);
    if (dessertMatch) {
      const dessertName = dessertMatch[1];
      await delay(2000);
      const newUrl = await searchPexels(dessertName + ' dessert');
      if (newUrl) {
        content = content.replace(
          /(dessert:\s*\{[\s\S]*?imageUrl:\s*['"])[^'"]*(['"])/,
          `$1${newUrl}$2`
        );
        changes.push(`dessert: ${dessertName}`);
      }
    }
  } else {
    changes.push('dessert: already pexels, skipped');
  }

  if (changes.length > 0 && !changes.every(c => c.includes('skipped'))) {
    fs.writeFileSync(filePath, content);
  }

  return changes;
}

async function main() {
  const files = fs.readdirSync(COUNTRIES_DIR)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts')
    .sort();

  console.log(`Processing ${files.length} country files...`);

  let totalUpdated = 0;

  // Process in batches of 30
  for (let i = 0; i < files.length; i += 30) {
    const batch = files.slice(i, i + 30);
    console.log(`\n--- Batch ${Math.floor(i/30)+1} (files ${i+1}-${i+batch.length}) ---`);

    for (const file of batch) {
      try {
        const changes = await processCountryFile(path.join(COUNTRIES_DIR, file));
        const updated = changes.filter(c => !c.includes('skipped'));
        if (updated.length > 0) {
          console.log(`✅ ${file}: ${updated.join(', ')}`);
          totalUpdated += updated.length;
        } else {
          console.log(`⏭️  ${file}: skipped (already pexels)`);
        }
      } catch (err) {
        console.log(`❌ ${file}: ${err.message}`);
      }
    }
  }

  console.log(`\nDone! ${totalUpdated} images updated across ${files.length} files.`);
}

main().catch(console.error);
