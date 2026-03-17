/**
 * Add difficulty to all recipes.
 * Inserts after cookingTime line, skips if already present.
 * Heuristic: easy (<=30min, <=8 ingredients), hard (>=90min OR >=15 ingredients), medium otherwise.
 */
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'data', 'countries');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
let count = 0;

for (const file of files) {
  const fp = path.join(dir, file);
  const content = fs.readFileSync(fp, 'utf-8');

  // Skip if file already has difficulty
  if (content.includes('difficulty:')) continue;

  const lines = content.split('\n');
  const result = [];

  for (let i = 0; i < lines.length; i++) {
    result.push(lines[i]);

    const ctMatch = lines[i].match(/^(\s*)cookingTime:\s*(\d+)/);
    if (!ctMatch) continue;

    const indent = ctMatch[1];
    const ct = parseInt(ctMatch[2]);

    // Count "amount:" lines ahead (one per ingredient) until next section
    let ingCount = 0;
    for (let j = i + 1; j < lines.length; j++) {
      const l = lines[j];
      // Stop at next major section or end of recipe
      if (l.match(/^\s{4}(dessert|drinks|mainDish|music|decorationIdeas|conversationStarters|quiz)\s*:/)) break;
      if (l.match(/^\s+amount:\s/)) ingCount++;
    }

    let diff = 'medium';
    if (ct <= 30 && ingCount <= 8) diff = 'easy';
    else if (ct >= 90 || ingCount >= 15) diff = 'hard';

    result.push(`${indent}difficulty: '${diff}',`);
  }

  fs.writeFileSync(fp, result.join('\n'));
  count++;
}

console.log(`Updated ${count} files`);
