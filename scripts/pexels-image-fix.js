const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = 'gOLCC4VX8HT6Z9Uw9yDGKJmsFVQDUZlLDk8t7T92QxShgmSmaoO30xDV';
const COUNTRIES_DIR = path.join(__dirname, '..', 'data', 'countries');
const PROGRESS_FILE = path.join(__dirname, 'pexels-progress.json');
const DELAY_MS = 3000;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function pexelsSearch(query) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`;
    const options = { headers: { 'Authorization': API_KEY } };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 429) { resolve({ rateLimited: true }); return; }
        if (res.statusCode !== 200) { resolve({ error: `HTTP ${res.statusCode}` }); return; }
        try {
          const json = JSON.parse(data);
          if (json.photos && json.photos.length > 0) {
            resolve({ url: json.photos[0].src.large, id: json.photos[0].id });
          } else { resolve({ error: 'no results' }); }
        } catch (e) { resolve({ error: 'parse error' }); }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function searchWithRetry(query, maxRetries = 3) {
  let delay = DELAY_MS;
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const result = await pexelsSearch(query);
    if (result.rateLimited) {
      console.log(`  Rate limited, waiting ${delay / 1000}s before retry...`);
      await sleep(delay);
      delay *= 2;
      continue;
    }
    return result;
  }
  return { error: 'rate limited after retries' };
}

function loadProgress() {
  try { if (fs.existsSync(PROGRESS_FILE)) return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8')); } catch (e) {}
  return {};
}

function saveProgress(progress) { fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2)); }

async function main() {
  const files = fs.readdirSync(COUNTRIES_DIR)
    .filter(f => f.endsWith('.ts') && f !== 'countries.ts' && f !== 'badges.ts').sort();
  console.log(`Found ${files.length} country files`);
  const progress = loadProgress();
  let fixed = 0, skipped = 0, failed = 0, alreadyDone = 0;

  for (const file of files) {
    const filePath = path.join(COUNTRIES_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const country = file.replace('.ts', '');
    const mainMatch = content.match(/mainDish:\s*\{[^}]*?name:\s*'([^']+)'/s);
    const dessertMatch = content.match(/dessert:\s*\{[^}]*?name:\s*'([^']+)'/s);
    if (!mainMatch || !dessertMatch) { console.log(`${country}: SKIP - can't parse`); skipped++; continue; }
    const mainDish = mainMatch[1];
    const dessert = dessertMatch[1];
    let changed = false;

    const mainUrlMatch = content.match(/(mainDish:\s*\{[\s\S]*?imageUrl:\s*')([^']+)(')/);
    if (mainUrlMatch && !mainUrlMatch[2].includes('pexels.com')) {
      const progressKey = `${country}-main`;
      let newUrl;
      if (progress[progressKey]) { newUrl = progress[progressKey]; console.log(`${country} main: cached`); }
      else {
        await sleep(DELAY_MS);
        const result = await searchWithRetry(`${mainDish} food dish`);
        if (result.url) { newUrl = result.url; progress[progressKey] = newUrl; saveProgress(progress); console.log(`${country} main (${mainDish}): ${result.id}`); }
        else { console.log(`${country} main: FAILED - ${result.error}`); failed++; }
      }
      if (newUrl) { content = content.replace(mainUrlMatch[2], newUrl); changed = true; fixed++; }
    } else { alreadyDone++; }

    const dessertUrlMatch = content.match(/(dessert:\s*\{[\s\S]*?imageUrl:\s*')([^']+)(')/);
    if (dessertUrlMatch && !dessertUrlMatch[2].includes('pexels.com')) {
      const progressKey = `${country}-dessert`;
      let newUrl;
      if (progress[progressKey]) { newUrl = progress[progressKey]; console.log(`${country} dessert: cached`); }
      else {
        await sleep(DELAY_MS);
        const result = await searchWithRetry(`${dessert} dessert sweet`);
        if (result.url) { newUrl = result.url; progress[progressKey] = newUrl; saveProgress(progress); console.log(`${country} dessert (${dessert}): ${result.id}`); }
        else { console.log(`${country} dessert: FAILED - ${result.error}`); failed++; }
      }
      if (newUrl) { content = content.replace(dessertUrlMatch[2], newUrl); changed = true; fixed++; }
    } else { alreadyDone++; }

    if (changed) fs.writeFileSync(filePath, content);
  }
  console.log('\n=== RESULTS ===');
  console.log(`Fixed: ${fixed}, Already Pexels: ${alreadyDone}, Skipped: ${skipped}, Failed: ${failed}`);
  let remaining = 0;
  for (const file of files) {
    const content = fs.readFileSync(path.join(COUNTRIES_DIR, file), 'utf8');
    const urls = content.match(/imageUrl:\s*'([^']+)'/g) || [];
    for (const u of urls) { if (!u.includes('pexels.com')) remaining++; }
  }
  console.log(`Remaining non-Pexels URLs: ${remaining}`);
}
main().catch(console.error);