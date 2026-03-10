#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const https = require('https');
const API_KEY = 'gOLCC4VX8HT6Z9Uw9yDGKJmsFVQDUZlLDk8t7T92QxShgmSmaoO30xDV';
const DELAY_MS = 3000;
let COUNTRIES_DIR, PROGRESS_FILE;
const scriptDir = __dirname;
if (fs.existsSync(path.join(scriptDir, 'data', 'countries'))) {
  COUNTRIES_DIR = path.join(scriptDir, 'data', 'countries');
  PROGRESS_FILE = path.join(scriptDir, 'pexels-progress.json');
} else if (fs.existsSync(path.join(scriptDir, '..', 'data', 'countries'))) {
  COUNTRIES_DIR = path.join(scriptDir, '..', 'data', 'countries');
  PROGRESS_FILE = path.join(scriptDir, 'pexels-progress.json');
} else { console.error('ERROR: Cannot find data/countries/'); process.exit(1); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function pexelsSearch(query) {
  return new Promise((resolve, reject) => {
    const url = 'https://api.pexels.com/v1/search?query=' + encodeURIComponent(query) + '&per_page=1';
    https.get(url, { headers: { 'Authorization': API_KEY } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 429) { resolve({ rateLimited: true }); return; }
        if (res.statusCode !== 200) { resolve({ error: 'HTTP ' + res.statusCode }); return; }
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
async function searchWithRetry(query, maxRetries) {
  maxRetries = maxRetries || 5; let delay = DELAY_MS;
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const result = await pexelsSearch(query);
    if (result.rateLimited) { await sleep(delay); delay *= 2; continue; }
    return result;
  }
  return { error: 'rate limited after retries' };
}
function loadProgress() {
  try { if (fs.existsSync(PROGRESS_FILE)) return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8')); }
  catch (e) {} return {};
}
function saveProgress(p) { fs.writeFileSync(PROGRESS_FILE, JSON.stringify(p, null, 2)); }
async function main() {
  console.log('=== Pexels Image Fix Script ===');
  console.log('Countries dir: ' + COUNTRIES_DIR);
  const files = fs.readdirSync(COUNTRIES_DIR).filter(f => f.endsWith('.ts') && f !== 'countries.ts' && f !== 'badges.ts').sort();
  console.log('Found ' + files.length + ' country files');
  const progress = loadProgress();
  let fixed = 0, skipped = 0, failed = 0, alreadyDone = 0;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(COUNTRIES_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const country = file.replace('.ts', '');
    const mainMatch = content.match(/mainDish:\s*\{[^}]*?name:\s*(?:'([^']+)'|\{\s*en:\s*'([^']+)')/s);
    const dessertMatch = content.match(/dessert:\s*\{[^}]*?name:\s*(?:'([^']+)'|\{\s*en:\s*'([^']+)')/s);
    if (!mainMatch || !dessertMatch) { console.log('[' + (i+1) + '/' + files.length + '] ' + country + ': SKIP'); skipped++; continue; }
    const mainDish = mainMatch[1] || mainMatch[2];
    const dessert = dessertMatch[1] || dessertMatch[2];
    let changed = false;
    const mainUrlMatch = content.match(/(mainDish:\s*\{[\s\S]*?(?:imageUrl|image):\s*')([^']+)(')/);
    if (mainUrlMatch && !mainUrlMatch[2].includes('pexels.com')) {
      const pk = country + '-main'; let newUrl;
      if (progress[pk]) { newUrl = progress[pk]; }
      else { await sleep(DELAY_MS); const r = await searchWithRetry(mainDish + ' food dish');
        if (r.url) { newUrl = r.url; progress[pk] = newUrl; saveProgress(progress);
          console.log('[' + (i+1) + '/' + files.length + '] ' + country + ' main (' + mainDish + '): photo ' + r.id);
        } else { failed++; } }
      if (newUrl) { content = content.replace(mainUrlMatch[2], newUrl); changed = true; fixed++; }
    } else { alreadyDone++; }
    const dessertUrlMatch = content.match(/(dessert:\s*\{[\s\S]*?(?:imageUrl|image):\s*')([^']+)(')/);
    if (dessertUrlMatch && !dessertUrlMatch[2].includes('pexels.com')) {
      const pk = country + '-dessert'; let newUrl;
      if (progress[pk]) { newUrl = progress[pk]; }
      else { await sleep(DELAY_MS); const r = await searchWithRetry(dessert + ' dessert sweet');
        if (r.url) { newUrl = r.url; progress[pk] = newUrl; saveProgress(progress);
          console.log('[' + (i+1) + '/' + files.length + '] ' + country + ' dessert (' + dessert + '): photo ' + r.id);
        } else { failed++; } }
      if (newUrl) { content = content.replace(dessertUrlMatch[2], newUrl); changed = true; fixed++; }
    } else { alreadyDone++; }
    if (changed) fs.writeFileSync(filePath, content);
  }
  console.log('\n=== RESULTS ===');
  console.log('Fixed: ' + fixed + ', Already Pexels: ' + alreadyDone + ', Skipped: ' + skipped + ', Failed: ' + failed);
  let remaining = 0;
  for (const file of files) {
    const c = fs.readFileSync(path.join(COUNTRIES_DIR, file), 'utf8');
    const urls = c.match(/(?:imageUrl|image):\s*'([^']+)'/g) || [];
    for (const u of urls) { if (!u.includes('pexels.com')) remaining++; }
  }
  console.log('Remaining non-Pexels: ' + remaining);
  if (remaining > 0) console.log('Run again to retry (progress saved).');
  else console.log('All done!');
}
main().catch(console.error);
