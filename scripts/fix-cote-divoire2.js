const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'countries', 'cote-divoire.ts');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');
const newLines = [];
let fixCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Match any it/pl/nl/pt line that ends with Côte d\', (truncated at apostrophe)
  const truncMatch = line.match(/^(\s+)(it|pl|nl|pt): '.*Côte d\\',\s*$/);
  if (truncMatch) {
    const indent = truncMatch[1];
    const lang = truncMatch[2];
    
    // Look back to find the en: value
    let enValue = '';
    for (let j = i - 1; j >= Math.max(0, i - 15); j--) {
      const enMatch = lines[j].match(/^\s+en: '((?:[^'\\]|\\.)*)'/);
      if (enMatch) {
        enValue = enMatch[1];
        break;
      }
    }
    
    if (enValue) {
      newLines.push(`${indent}${lang}: '${enValue}',`);
      fixCount++;
    } else {
      newLines.push(line);
      console.log(`  WARNING: Could not find en: value for line ${i + 1}: ${line.trim().substring(0, 60)}`);
    }
  } else {
    newLines.push(line);
  }
}

fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
console.log(`Fixed ${fixCount} more truncated translations`);
