const fs = require('fs');
const path = require('path');

const countriesDir = path.join(__dirname, 'data/countries');
const files = fs.readdirSync(countriesDir).filter(f => f.endsWith('.ts'));

const issues = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(countriesDir, file), 'utf8');
  const countryName = file.replace('.ts', '');
  
  const hasInnovations = content.includes('innovations:');
  const hasDessert = content.includes('dessert:');
  const quizMatches = content.match(/id: ['"].*?-q\d+['"]/g) || [];
  const quizCount = quizMatches.length;
  
  if (!hasInnovations || !hasDessert || quizCount < 10) {
    issues.push({
      file: countryName,
      hasInnovations,
      hasDessert,
      quizCount
    });
  }
});

console.log('Countries needing updates:');
console.log('=========================');
issues.forEach(issue => {
  console.log(`\n${issue.file}:`);
  if (!issue.hasInnovations) console.log('  ❌ Missing innovations');
  if (!issue.hasDessert) console.log('  ❌ Missing dessert');
  if (issue.quizCount < 10) console.log(`  ❌ Only ${issue.quizCount} quiz questions (need 10)`);
});

console.log(`\n\nTotal countries with issues: ${issues.length} / ${files.length}`);
console.log(`Countries complete: ${files.length - issues.length}`);
