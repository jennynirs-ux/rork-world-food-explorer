import { generateObject } from '@rork-ai/toolkit-sdk';
import { z } from 'zod';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const DATA_DIR = join(process.cwd(), 'data', 'countries');

type TranslatedContent = {
  en: string;
  sv: string;
  es: string;
  fr: string;
  de: string;
};

function escapeString(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

function formatTranslatedContent(content: TranslatedContent): string {
  return `{ en: '${escapeString(content.en)}', sv: '${escapeString(content.sv)}', es: '${escapeString(content.es)}', fr: '${escapeString(content.fr)}', de: '${escapeString(content.de)}' }`;
}

async function translateBatch(texts: string[], category: string): Promise<TranslatedContent[]> {
  console.log(`      Translating ${texts.length} ${category}...`);
  
  const result = await generateObject({
    messages: [
      {
        role: 'user',
        content: `Translate the following texts to Swedish (sv), Spanish (es), French (fr), and German (de). Maintain the tone, style, and context.

Texts (${category}):
${texts.map((t, i) => `${i + 1}. ${t}`).join('\n')}

Return JSON with translations array.`,
      },
    ],
    schema: z.object({
      translations: z.array(
        z.object({
          sv: z.string(),
          es: z.string(),
          fr: z.string(),
          de: z.string(),
        })
      ),
    }),
  });

  return result.translations.map((t, i) => ({
    en: texts[i],
    ...t,
  }));
}

async function translateCountryFile(filePath: string): Promise<void> {
  console.log(`\n🌍 Processing ${filePath.split('/').pop()}...`);
  
  let content = readFileSync(filePath, 'utf-8');
  const original = content;

  const descMatch = content.match(/description: '([^']+)'/);
  if (descMatch && !descMatch[0].includes('{ en:')) {
    console.log('    📝 Description');
    const translated = await translateBatch([descMatch[1]], 'description');
    content = content.replace(/description: '[^']+'/,`description: ${formatTranslatedContent(translated[0])}`);
  }

  const foodMatch = content.match(/foodCulture: '([^']+)'/);
  if (foodMatch && !foodMatch[0].includes('{ en:')) {
    console.log('    🍽️  Food culture');
    const translated = await translateBatch([foodMatch[1]], 'food culture');
    content = content.replace(/foodCulture: '[^']+'/,`foodCulture: ${formatTranslatedContent(translated[0])}`);
  }

  const factsMatch = content.match(/facts: \[([\s\S]*?)\]/);
  if (factsMatch && !factsMatch[1].includes('{ en:')) {
    const facts = factsMatch[1].match(/'([^']+)'/g)?.map(f => f.slice(1, -1)) || [];
    if (facts.length > 0) {
      console.log(`    📊 ${facts.length} facts`);
      const translated = await translateBatch(facts, 'facts');
      const factsStr = translated.map(f => `    ${formatTranslatedContent(f)}`).join(',\n');
      content = content.replace(/facts: \[[\s\S]*?\]/,`facts: [\n${factsStr},\n  ]`);
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
      
      events.forEach((e, i) => {
        content = content.replace(
          new RegExp(`title: '${escapeString(e[1]).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`),
          `title: ${formatTranslatedContent(translatedTitles[i])}`
        );
        content = content.replace(
          new RegExp(`description: '${escapeString(e[2]).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`),
          `description: ${formatTranslatedContent(translatedDescs[i])}`
        );
      });
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
      
      innovations.forEach((e, i) => {
        content = content.replace(
          new RegExp(`name: '${escapeString(e[1]).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`),
          `name: ${formatTranslatedContent(translatedNames[i])}`
        );
        content = content.replace(
          new RegExp(`description: '${escapeString(e[2]).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`),
          `description: ${formatTranslatedContent(translatedDescs[i])}`
        );
      });
    }
  }

  const mainDishMatch = content.match(/mainDish: \{[\s\S]*?name: '([^']+)'[\s\S]*?description: '([^']+)'/);
  if (mainDishMatch && !mainDishMatch[0].includes('{ en:')) {
    console.log('    🥘 Main dish');
    const translated = await translateBatch([mainDishMatch[1], mainDishMatch[2]], 'recipe');
    content = content.replace(
      /mainDish: \{[\s\S]*?name: '[^']+'/,
      content.match(/mainDish: \{[\s\S]*?name:/)?.[0] + ` ${formatTranslatedContent(translated[0])}`
    );
  }

  const decoMatch = content.match(/decorationIdeas: \[([\s\S]*?)\],/);
  if (decoMatch && !decoMatch[1].includes('{ en:')) {
    const items = decoMatch[1].match(/'([^']+)'/g)?.map(f => f.slice(1, -1)) || [];
    if (items.length > 0) {
      console.log(`    🎨 ${items.length} decoration ideas`);
      const translated = await translateBatch(items, 'decoration ideas');
      const str = translated.map(f => `    ${formatTranslatedContent(f)}`).join(',\n');
      content = content.replace(/decorationIdeas: \[[\s\S]*?\],/,`decorationIdeas: [\n${str},\n  ],`);
    }
  }

  const convMatch = content.match(/conversationStarters: \[([\s\S]*?)\],/);
  if (convMatch && !convMatch[1].includes('{ en:')) {
    const items = convMatch[1].match(/'([^']+)'/g)?.map(f => f.slice(1, -1)) || [];
    if (items.length > 0) {
      console.log(`    💬 ${items.length} conversation starters`);
      const translated = await translateBatch(items, 'conversation starters');
      const str = translated.map(f => `    ${formatTranslatedContent(f)}`).join(',\n');
      content = content.replace(/conversationStarters: \[[\s\S]*?\],/,`conversationStarters: [\n${str},\n  ],`);
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
          new RegExp(`question: '${escapeString(question).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`),
          `question: ${formatTranslatedContent(translatedQ[0])}`
        );
        
        options.forEach((opt, i) => {
          content = content.replace(
            new RegExp(`'${escapeString(opt).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`),
            formatTranslatedContent(translatedOpts[i])
          );
        });
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
    .map(f => join(DATA_DIR, f))
    .slice(0, 5);

  console.log(`📋 Translating ${files.length} countries\n`);

  for (let i = 0; i < files.length; i++) {
    try {
      await translateCountryFile(files[i]);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`❌ Error:`, error);
    }
  }

  console.log('\n✅ Complete!');
}

main().catch(console.error);
