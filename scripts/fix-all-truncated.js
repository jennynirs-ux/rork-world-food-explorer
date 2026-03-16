const fs = require('fs');
const path = require('path');

const countriesDir = path.join(__dirname, '..', 'data', 'countries');
const files = fs.readdirSync(countriesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;
let totalUnfixed = 0;
let filesFixed = 0;

for (const file of files) {
  const filePath = path.join(countriesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const newLines = [];
  let fixCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // In the actual file, an escaped apostrophe is \' (backslash + quote)
    // In JS string read from file, that's the two chars: \ and '
    // So the line ends with: ...world\', where \' is literal backslash-quote
    // In regex: we need to match a backslash before the closing quote-comma
    
    // Check if this is an it/pl/nl/pt line
    const langMatch = line.match(/^(\s+)(it|pl|nl|pt): '/);
    if (!langMatch) {
      newLines.push(line);
      continue;
    }
    
    // Check if the line ends with \', (truncated at apostrophe)
    // In the file content, the line literally has: ...\',
    if (line.trimEnd().endsWith("\\',")){
      const indent = langMatch[1];
      const lang = langMatch[2];
      
      // Look back to find the en: value
      let enValue = '';
      for (let j = i - 1; j >= Math.max(0, i - 20); j--) {
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
        totalUnfixed++;
      }
    } else {
      newLines.push(line);
    }
  }

  if (fixCount > 0) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    totalFixed += fixCount;
    filesFixed++;
  }
}

console.log(`Fixed ${totalFixed} truncated translations across ${filesFixed} files`);
if (totalUnfixed > 0) console.log(`WARNING: ${totalUnfixed} lines could not be fixed (no en: found)`);
