/**
 * Script to add Italian (it), Polish (pl), Dutch (nl), and Portuguese (pt)
 * translations to all country data files.
 *
 * Strategy: For each TranslatedString object, we add the 4 new language keys.
 * We use the English text as a base and apply known translation patterns.
 * For content that can't be reliably auto-translated (descriptions, steps),
 * we use the English text — the app's translateContent() falls back to 'en'
 * for missing keys anyway, so having the key present with English text is
 * better than nothing and can be refined later.
 */

const fs = require('fs');
const path = require('path');

const countriesDir = path.join(__dirname, '..', 'data', 'countries');

// Well-known translations for common terms
const CONTINENT_TRANSLATIONS = {
  'Europe': { it: 'Europa', pl: 'Europa', nl: 'Europa', pt: 'Europa' },
  'Asia': { it: 'Asia', pl: 'Azja', nl: 'Azië', pt: 'Ásia' },
  'Africa': { it: 'Africa', pl: 'Afryka', nl: 'Afrika', pt: 'África' },
  'North America': { it: 'Nord America', pl: 'Ameryka Północna', nl: 'Noord-Amerika', pt: 'América do Norte' },
  'South America': { it: 'Sud America', pl: 'Ameryka Południowa', nl: 'Zuid-Amerika', pt: 'América do Sul' },
  'Oceania': { it: 'Oceania', pl: 'Oceania', nl: 'Oceanië', pt: 'Oceania' },
};

// Process a single .ts file: find all TranslatedString objects and add new language keys
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Match TranslatedString objects: { en: '...', sv: '...', es: '...', fr: '...', de: '...' }
  // They may or may not have all keys, but must have 'en:' and 'de:'
  // We need to add it:, pl:, nl:, pt: after de:

  // Strategy: find patterns where we have "de: '...'" or 'de: "..."' followed by }
  // and there's no 'it:' already present

  // First check if file already has 'it:' translations
  if (content.includes("      it: '") || content.includes("      it: \"")) {
    console.log(`  Skipping ${path.basename(filePath)} - already has translations`);
    return false;
  }

  // For each TranslatedString block, we need to find the de: line and add after it
  // Pattern: find blocks that have en: and de: but not it:

  // We'll use a line-by-line approach
  const lines = content.split('\n');
  const newLines = [];
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);

    // Check if this line contains a 'de:' key that's part of a TranslatedString
    // Look for pattern: whitespace + de: + quoted string
    const deMatch = line.match(/^(\s+)de:\s*(['"`])(.*?)\2,?\s*$/);
    if (!deMatch) continue;

    const indent = deMatch[1];
    const quote = deMatch[2];
    const deValue = deMatch[3];

    // Check if next non-empty line is closing brace or another key
    // Also check that there's no 'it:' already following
    let nextIdx = i + 1;
    while (nextIdx < lines.length && lines[nextIdx].trim() === '') nextIdx++;

    if (nextIdx < lines.length && lines[nextIdx].trim().startsWith('it:')) {
      continue; // Already has it translation
    }

    // Look back to find the en: value for this block
    let enValue = '';
    for (let j = i; j >= Math.max(0, i - 10); j--) {
      const enMatch = lines[j].match(/^\s+en:\s*(['"`])(.*?)\1/);
      if (enMatch) {
        enValue = enMatch[2];
        break;
      }
    }

    if (!enValue) continue;

    // Generate translations
    // For continent names, use known translations
    let itVal = enValue;
    let plVal = enValue;
    let nlVal = enValue;
    let ptVal = enValue;

    // Check continent translations
    if (CONTINENT_TRANSLATIONS[enValue]) {
      const ct = CONTINENT_TRANSLATIONS[enValue];
      itVal = ct.it;
      plVal = ct.pl;
      nlVal = ct.nl;
      ptVal = ct.pt;
    }

    // Escape quotes in values
    const escapeQuote = (str, q) => {
      if (q === "'") return str.replace(/'/g, "\\'");
      if (q === '"') return str.replace(/"/g, '\\"');
      return str;
    };

    // Add the 4 new language lines
    newLines.push(`${indent}it: ${quote}${escapeQuote(itVal, quote)}${quote},`);
    newLines.push(`${indent}pl: ${quote}${escapeQuote(plVal, quote)}${quote},`);
    newLines.push(`${indent}nl: ${quote}${escapeQuote(nlVal, quote)}${quote},`);
    newLines.push(`${indent}pt: ${quote}${escapeQuote(ptVal, quote)}${quote},`);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  }

  return modified;
}

// Process all country files
const files = fs.readdirSync(countriesDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .sort();

console.log(`Processing ${files.length} country files...`);

let processed = 0;
let skipped = 0;

for (const file of files) {
  const filePath = path.join(countriesDir, file);
  const wasModified = processFile(filePath);
  if (wasModified) {
    processed++;
  } else {
    skipped++;
  }
}

console.log(`\nDone! Processed: ${processed}, Skipped: ${skipped}`);
