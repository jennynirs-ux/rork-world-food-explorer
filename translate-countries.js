#!/usr/bin/env node
/**
 * translate-countries.js
 * Converts all country data files from plain English strings to TranslatedString objects.
 * Uses free Google Translate API (no key needed).
 *
 * Usage:
 *   cd rork-world-food-explorer
 *   npm install google-translate-api-x
 *   node translate-countries.js
 */
const fs = require('fs');
const path = require('path');
let translate;
const TARGET_LANGUAGES = ['sv', 'es', 'fr', 'de'];
const SCRIPT_DIR = __dirname;
const REPO_ROOT = fs.existsSync(path.join(SCRIPT_DIR, '..', 'data', 'countries'))
  ? path.join(SCRIPT_DIR, '..') : fs.existsSync(path.join(SCRIPT_DIR, 'data', 'countries'))
    ? SCRIPT_DIR : null;
if (!REPO_ROOT) { console.error('ERROR: Cannot find data/countries directory.'); process.exit(1); }
const COUNTRIES_DIR = path.join(REPO_ROOT, 'data', 'countries');
const PROGRESS_FILE = path.join(SCRIPT_DIR, 'translate-progress.json');
const TRANSLATABLE_PATHS = new Set(['name','continent','description','quickFacts.$.label','quickFacts.$.value','facts.$','foodCulture.description','foodCulture.traditions.$','foodCulture.influences.$','foodCulture.dietaryHabits','foodCulture.mealStructure','mainDish.name','mainDish.description','mainDish.recipe.name','mainDish.recipe.description','mainDish.recipe.ingredients.$.name','mainDish.recipe.steps.$','mainDish.recipe.prepTime','mainDish.recipe.cookTime','mainDish.recipe.servings','dessert.name','dessert.description','dessert.recipe.name','dessert.recipe.description','dessert.recipe.ingredients.$.name','dessert.recipe.steps.$','dessert.recipe.prepTime','dessert.recipe.cookTime','dessert.recipe.servings','quiz.$.question','quiz.$.options.$','history']);
const SKIP_FIELDS = new Set(['id','code','flag','landscapeImage','imageUrl','image','correctAnswer','coordinates','mapRegion','amount','difficulty','rating','cookCount','pinLocation']);
function loadProgress() { try { return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8')); } catch { return { completed: [], failed: [] }; } }
function saveProgress(p) { fs.writeFileSync(PROGRESS_FILE, JSON.stringify(p, null, 2)); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function collectStrings(obj, cp) {
  cp = cp || '';
  const res = [];
  if (obj === null || obj === undefined) return res;
  if (typeof obj === 'string') { if (shouldTranslate(cp, obj)) res.push({ path: cp, value: obj }); return res; }
  if (Array.isArray(obj)) { obj.forEach((item) => { res.push(...collectStrings(item, cp + '.$')); }); return res; }
  if (typeof obj === 'object') {
    if (obj.en && typeof obj.en === 'string') return res;
    for (const [key, val] of Object.entries(obj)) { if (SKIP_FIELDS.has(key)) continue; res.push(...collectStrings(val, cp ? cp + '.' + key : key)); }
    return res;
  }
  return res;
}
function shouldTranslate(p, value) {
  if (value.length < 3) return false;
  if (value.startsWith('http')) return false;
  if (/^[\d.]+$/.test(value)) return false;
  const np = p.replace(/\.\d+\./g, '.$.').replace(/\.\d+$/g, '.$');
  for (const tp of TRANSLATABLE_PATHS) { if (np === tp || np.endsWith('.' + tp)) return true; }
  const parents = ['foodCulture','mainDish','dessert','quiz','recipe'];
  for (const pp of parents) { if (np.includes(pp + '.') && value.length > 3) return true; }
  return false;
}
async function translateBatch(strings, targetLang) {
  if (strings.length === 0) return [];
  const results = []; const BS = 20;
  for (let i = 0; i < strings.length; i += BS) {
    const batch = strings.slice(i, i + BS);
    const sep = ' ||| ';
    try {
      const res = await translate(batch.join(sep), { to: targetLang });
      const translated = res.text.split(sep).map(s => s.trim());
      if (translated.length !== batch.length) {
        for (const str of batch) { try { const r = await translate(str, { to: targetLang }); results.push(r.text); await sleep(500); } catch { results.push(str); } }
      } else { results.push(...translated); }
    } catch {
      for (const str of batch) { try { const r = await translate(str, { to: targetLang }); results.push(r.text); await sleep(1000); } catch { results.push(str); } }
    }
    if (i + BS < strings.length) await sleep(2000);
  }
  return results;
}
function parseCountryFile(fp) {
  let c = fs.readFileSync(fp, 'utf8');
  c = c.replace(/import\s*\{[^}]*\}\s*from\s*['"][^'"]*['"];?\s*/g, '');
  c = c.replace(/export\s+const\s+\w+\s*:\s*Country\s*=\s*/, '');
  c = c.replace(/;\s*$/, '');
  try { return new Function('return (' + c + ')')(); } catch (e) { console.error('  Parse failed: ' + e.message); return null; }
}
function serializeValue(val, indent, depth) {
  const pad = ' '.repeat(indent * depth);
  const pi = ' '.repeat(indent * (depth + 1));
  if (val === null || val === undefined) return 'null';
  if (typeof val === 'number') return String(val);
  if (typeof val === 'boolean') return String(val);
  if (typeof val === 'string') { return "'" + val.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'"; }
  if (Array.isArray(val)) { if (!val.length) return '[]'; return '[\n' + val.map(item => pi + serializeValue(item, indent, depth + 1)).join(',\n') + ',\n' + pad + ']'; }
  if (typeof val === 'object') {
    const entries = Object.entries(val);
    if (!entries.length) return '{}';
    return '{\n' + entries.map(([k, v]) => { const ks = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : "'" + k + "'"; return pi + ks + ': ' + serializeValue(v, indent, depth + 1); }).join(',\n') + ',\n' + pad + '}';
  }
  return String(val);
}
function applyTranslations(obj, tm, cp) {
  cp = cp || '';
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === 'string') { return tm.has(obj) ? tm.get(obj) : obj; }
  if (Array.isArray(obj)) { return obj.map((item) => applyTranslations(item, tm, cp + '.$')); }
  if (typeof obj === 'object') {
    if (obj.en && typeof obj.en === 'string' && (obj.sv || obj.es)) return obj;
    const result = {};
    for (const [k, v] of Object.entries(obj)) { result[k] = SKIP_FIELDS.has(k) ? v : applyTranslations(v, tm, cp ? cp + '.' + k : k); }
    return result;
  }
  return obj;
}
async function processCountryFile(fp) {
  const fn = path.basename(fp);
  console.log('\nProcessing: ' + fn);
  const data = parseCountryFile(fp);
  if (!data) return false;
  const strings = collectStrings(data);
  const unique = [...new Set(strings.map(s => s.value))];
  console.log('  Found ' + unique.length + ' translatable strings');
  if (!unique.length) return true;
  const tm = new Map();
  for (const lang of TARGET_LANGUAGES) {
    console.log('  Translating to ' + lang + '...');
    const translated = await translateBatch(unique, lang);
    for (let i = 0; i < unique.length; i++) {
      if (!tm.has(unique[i])) tm.set(unique[i], { en: unique[i] });
      tm.get(unique[i])[lang] = translated[i] || unique[i];
    }
    await sleep(2000);
  }
  const translated = applyTranslations(data, tm);
  const orig = fs.readFileSync(fp, 'utf8');
  const vm = orig.match(/export\s+const\s+(\w+)\s*:/);
  const varName = vm ? vm[1] : fn.replace('.ts', '').replace(/-/g, '');
  fs.writeFileSync(fp, "import { Country } from '@/types';\n\nexport const " + varName + ": Country = " + serializeValue(translated, 2, 1) + ";\n", 'utf8');
  console.log('  Done: ' + fn);
  return true;
}
async function main() {
  try {
    const mod = await import('google-translate-api-x');
    translate = mod.default || mod;
    if (typeof translate !== 'function') translate = mod.translate || (mod.default && mod.default.translate);
    if (typeof translate !== 'function') throw new Error('Could not find translate function');
  } catch (e) { console.error('ERROR: npm install google-translate-api-x first'); process.exit(1); }
  console.log('Testing API...');
  try { const t = await translate('Hello world', { to: 'sv' }); console.log('Test: Hello -> ' + t.text + ' OK'); } catch (e) { console.error('Test failed: ' + e.message); process.exit(1); }
  const progress = loadProgress();
  console.log('Previously completed: ' + progress.completed.length);
  const files = fs.readdirSync(COUNTRIES_DIR).filter(f => f.endsWith('.ts')).sort();
  console.log('Total files: ' + files.length);
  let ok = progress.completed.length, fail = 0;
  for (const file of files) {
    if (progress.completed.includes(file)) continue;
    try {
      if (await processCountryFile(path.join(COUNTRIES_DIR, file))) { progress.completed.push(file); ok++; }
      else { progress.failed.push(file); fail++; }
    } catch (e) {
      console.error('  ERROR: ' + e.message); progress.failed.push(file); fail++;
      if (e.message.includes('429') || e.message.includes('rate')) { console.log('  Rate limited, waiting 60s...'); await sleep(60000); }
    }
    saveProgress(progress);
    await sleep(3000);
    if (ok % 10 === 0) console.log('--- Progress: ' + ok + '/' + files.length + ' ---');
  }
  console.log('\n=== DONE === Translated: ' + ok + '/' + files.length + (fail > 0 ? ', Failed: ' + fail : ''));
}
main().catch(e => { console.error('Fatal: ' + e); process.exit(1); });
