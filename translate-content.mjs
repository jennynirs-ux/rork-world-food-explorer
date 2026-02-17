import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const PROJECT_ID = '56o1fosrqamv60p2zg5yo';
const TOOLKIT_URL = process.env.EXPO_PUBLIC_TOOLKIT_URL || 'https://toolkit.rork.app';
const RORK_API = process.env.EXPO_PUBLIC_RORK_API_BASE_URL || 'https://api.rork.app';
const DATA_DIR = join(process.cwd(), 'data', 'countries');

function escapeString(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

function formatTranslatedContent(content) {
  return `{ en: '${escapeString(content.en)}', sv: '${escapeString(content.sv)}', es: '${escapeString(content.es)}', fr: '${escapeString(content.fr)}', de: '${escapeString(content.de)}' }`;
}

async function translateBatch(texts, category) {
  console.log(`      Translating ${texts.length} ${category}...`);
  
  const response = await fetch(`${RORK_API}/v1/toolkit/generate-object`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'x-project-id': PROJECT_ID
    },
    body: JSON.stringify({
      messages: [{
        role: 'user',
        content: `Translate the following texts to Swedish (sv), Spanish (es), French (fr), and German (de). Maintain the tone, style, and context.

Texts (${category}):
${texts.map((t, i) => `${i + 1}. ${t}`).join('\n')}

Return JSON with translations array.`
      }],
      schema: {
        type: 'object',
        properties: {
          translations: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                sv: { type: 'string' },
                es: { type: 'string' },
                fr: { type: 'string' },
                de: { type: 'string' }
              },
              required: ['sv', 'es', 'fr', 'de']
            }
          }
        },
        required: ['translations']
      }
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API error: ${response.status} ${text}`);
  }

  const result = await response.json();
  
  return result.translations.map((t, i) => ({
    en: texts[i],
    ...t
  }));
}

async function translateCountryFile(filePath) {
  console.log(`\n🌍 Processing ${filePath.split('/').pop()}...`);
  
  let content = readFileSync(filePath, 'utf-8');
  const original = content;

  const descMatch = content.match(/description: '([^']+)'/);
  if (descMatch && !descMatch[0].includes('{ en:')) {
    console.log('    📝 Description');
    const translated = await translateBatch([descMatch[1]], 'description');
    content = content.replace(/description: '[^']+'/, `description: ${formatTranslatedContent(translated[0])}`);
  }

  const foodMatch = content.match(/foodCulture: '([^']+)'/);
  if (foodMatch && !foodMatch[0].includes('{ en:')) {
    console.log('    🍽️  Food culture');
    const translated = await translateBatch([foodMatch[1]], 'food culture');
    content = content.replace(/foodCulture: '[^']+'/, `foodCulture: ${formatTranslatedContent(translated[0])}`);
  }

  const factsMatch = content.match(/facts: \[([\s\S]*?)\]/);
  if (factsMatch && !factsMatch[1].includes('{ en:')) {
    const facts = factsMatch[1].match(/'([^']+)'/g)?.map(f => f.slice(1, -1)) || [];
    if (facts.length > 0) {
      console.log(`    📊 ${facts.length} facts`);
      const translated = await translateBatch(facts, 'facts');
      const factsStr = translated.map(f => `    ${formatTranslatedContent(f)}`).join(',\n');
      content = content.replace(/facts: \[[\s\S]*?\]/, `facts: [\n${factsStr},\n  ]`);
    }
  }

  const historyMatch = content.match(/history: \[([\s\S]*?)\],/);
  if (historyMatch && !historyMatch[1].includes('{ en:')) {
    const events = [...historyMatch[1].matchAll(/title: '([^']+)'[\s\S]*?description: '([^']+)'/g)];
    if (events.length > 0) {
      console.log(`    📜 ${events.length} history events`);
      const titles = events.map(e => e[1]);
      const descs = events.map(e => e[2]);
      const translatedTitles = await translateBatch(titles, 'history titles');
      const translatedDescs = await translateBatch(descs, 'history descriptions');
      
      for (let i = 0; i < events.length; i++) {
        const e = events[i];
        content = content.replace(
          new RegExp(`title: '${e[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`),
          `title: ${formatTranslatedContent(translatedTitles[i])}`
        );
        content = content.replace(
          new RegExp(`description: '${e[2].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`),
          `description: ${formatTranslatedContent(translatedDescs[i])}`
        );
      }
    }
  }

  const innMatch = content.match(/innovations: \[([\s\S]*?)\],/);
  if (innMatch && !innMatch[1].includes('{ en:')) {
    const innovations = [...innMatch[1].matchAll(/name: '([^']+)'[\s\S]*?description: '([^']+)'/g)];
    if (innovations.length > 0) {
      console.log(`    💡 ${innovations.length} innovations`);
      const names = innovations.map(e => e[1]);
      const descs = innovations.map(e => e[2]);
      const translatedNames = await translateBatch(names, 'innovation names');
      const translatedDescs = await translateBatch(descs, 'innovation descriptions');
      
      for (let i = 0; i < innovations.length; i++) {
        const e = innovations[i];
        content = content.replace(
          new RegExp(`name: '${e[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`),
          `name: ${formatTranslatedContent(translatedNames[i])}`
        );
        content = content.replace(
          new RegExp(`description: '${e[2].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`),
          `description: ${formatTranslatedContent(translatedDescs[i])}`
        );
      }
    }
  }

  const decoMatch = content.match(/decorationIdeas: \[([\s\S]*?)\],/);
  if (decoMatch && !decoMatch[1].includes('{ en:')) {
    const items = decoMatch[1].match(/'([^']+)'/g)?.map(f => f.slice(1, -1)) || [];
    if (items.length > 0) {
      console.log(`    🎨 ${items.length} decoration ideas`);
      const translated = await translateBatch(items, 'decoration ideas');
      const str = translated.map(f => `    ${formatTranslatedContent(f)}`).join(',\n');
      content = content.replace(/decorationIdeas: \[[\s\S]*?\],/, `decorationIdeas: [\n${str},\n  ],`);
    }
  }

  const convMatch = content.match(/conversationStarters: \[([\s\S]*?)\],/);
  if (convMatch && !convMatch[1].includes('{ en:')) {
    const items = convMatch[1].match(/'([^']+)'/g)?.map(f => f.slice(1, -1)) || [];
    if (items.length > 0) {
      console.log(`    💬 ${items.length} conversation starters`);
      const translated = await translateBatch(items, 'conversation starters');
      const str = translated.map(f => `    ${formatTranslatedContent(f)}`).join(',\n');
      content = content.replace(/conversationStarters: \[[\s\S]*?\],/, `conversationStarters: [\n${str},\n  ],`);
    }
  }

  const quizMatch = content.match(/quiz: \[([\s\S]*?)\],/);
  if (quizMatch && !quizMatch[1].includes('{ en:')) {
    const questions = [...quizMatch[1].matchAll(/question: '([^']+)'[\s\S]*?options: \[([\s\S]*?)\]/g)];
    if (questions.length > 0) {
      console.log(`    ❓ ${questions.length} quiz questions`);
      
      for (const q of questions) {
        const question = q[1];
        const options = q[2].match(/'([^']+)'/g)?.map(o => o.slice(1, -1)) || [];
        
        const translatedQ = await translateBatch([question], 'quiz question');
        const translatedOpts = await translateBatch(options, 'quiz options');
        
        content = content.replace(
          new RegExp(`question: '${question.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`),
          `question: ${formatTranslatedContent(translatedQ[0])}`
        );
        
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          content = content.replace(
            new RegExp(`'${opt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`),
            formatTranslatedContent(translatedOpts[i])
          );
        }
      }
    }
  }

  if (content !== original) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✅ Updated`);
  } else {
    console.log(`  ⏭️  Already translated`);
  }
}

async function main() {
  console.log('🚀 Starting full content translation...\n');
  
  const files = readdirSync(DATA_DIR)
    .filter(f => f.endsWith('.ts'))
    .map(f => join(DATA_DIR, f));

  console.log(`📋 Translating ${files.length} countries\n`);

  for (let i = 0; i < files.length; i++) {
    try {
      console.log(`\n[${i + 1}/${files.length}]`);
      await translateCountryFile(files[i]);
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`❌ Error:`, error.message);
    }
  }

  console.log('\n✅ Complete!');
}

main().catch(console.error);
