import { generateObject } from '@rork-ai/toolkit-sdk';
import { z } from 'zod';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const SUPPORTED_LANGUAGES = ['sv', 'es', 'fr', 'de'] as const;
const DATA_DIR = join(process.cwd(), 'data', 'countries');

type TranslatedContent = {
  en: string;
  sv: string;
  es: string;
  fr: string;
  de: string;
};

async function translateText(text: string): Promise<TranslatedContent> {
  const result = await generateObject({
    messages: [
      {
        role: 'user',
        content: `Translate the following text to Swedish (sv), Spanish (es), French (fr), and German (de). Keep the same tone and style. Return the translations in JSON format.

Text to translate: "${text}"

Return format:
{
  "sv": "Swedish translation",
  "es": "Spanish translation",
  "fr": "French translation",
  "de": "German translation"
}`,
      },
    ],
    schema: z.object({
      sv: z.string(),
      es: z.string(),
      fr: z.string(),
      de: z.string(),
    }),
  });

  return {
    en: text,
    ...result,
  };
}

async function translateArrayTexts(texts: string[]): Promise<TranslatedContent[]> {
  const result = await generateObject({
    messages: [
      {
        role: 'user',
        content: `Translate the following texts to Swedish (sv), Spanish (es), French (fr), and German (de). Keep the same tone and style. Return all translations in JSON format as an array.

Texts to translate:
${texts.map((t, i) => `${i + 1}. ${t}`).join('\n')}

Return format:
{
  "translations": [
    {
      "sv": "Swedish translation 1",
      "es": "Spanish translation 1",
      "fr": "French translation 1",
      "de": "German translation 1"
    },
    ...
  ]
}`,
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

function escapeString(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

function formatTranslatedContent(content: TranslatedContent, indent: string = ''): string {
  return `{ en: '${escapeString(content.en)}', sv: '${escapeString(content.sv)}', es: '${escapeString(content.es)}', fr: '${escapeString(content.fr)}', de: '${escapeString(content.de)}' }`;
}

async function translateCountryFile(filePath: string): Promise<void> {
  console.log(`\n🌍 Translating ${filePath}...`);
  
  const content = readFileSync(filePath, 'utf-8');
  
  const countryMatch = content.match(/export const (\w+): Country = ({[\s\S]*?});?\s*$/m);
  if (!countryMatch) {
    console.error(`❌ Could not parse country file: ${filePath}`);
    return;
  }

  const countryName = countryMatch[1];
  const countryCode = content.match(/code: '(\w+)'/)?.[1];
  
  console.log(`  Translating ${countryName} (${countryCode})...`);

  const descriptionMatch = content.match(/description: '([^']+)'/);
  const factsMatch = content.match(/facts: \[([\s\S]*?)\]/);
  const foodCultureMatch = content.match(/foodCulture: '([^']+)'/);
  
  let updatedContent = content;

  if (descriptionMatch && descriptionMatch[1] && !descriptionMatch[0].includes('{ en:')) {
    console.log('    📝 Translating description...');
    const translatedDesc = await translateText(descriptionMatch[1]);
    updatedContent = updatedContent.replace(
      /description: '[^']+'/,
      `description: ${formatTranslatedContent(translatedDesc)}`
    );
  }

  if (foodCultureMatch && foodCultureMatch[1] && !foodCultureMatch[0].includes('{ en:')) {
    console.log('    🍽️  Translating food culture...');
    const translatedFood = await translateText(foodCultureMatch[1]);
    updatedContent = updatedContent.replace(
      /foodCulture: '[^']+'/,
      `foodCulture: ${formatTranslatedContent(translatedFood)}`
    );
  }

  if (factsMatch && factsMatch[1] && !factsMatch[1].includes('{ en:')) {
    const factsText = factsMatch[1];
    const factsList = factsText.match(/'([^']+)'/g)?.map(f => f.slice(1, -1)) || [];
    
    if (factsList.length > 0) {
      console.log(`    📊 Translating ${factsList.length} facts...`);
      const translatedFacts = await translateArrayTexts(factsList);
      const factsString = translatedFacts
        .map(f => `    ${formatTranslatedContent(f)}`)
        .join(',\n');
      updatedContent = updatedContent.replace(
        /facts: \[[\s\S]*?\]/,
        `facts: [\n${factsString},\n  ]`
      );
    }
  }

  console.log(`  ✅ Translated ${countryName}`);
  writeFileSync(filePath, updatedContent, 'utf-8');
}

async function main() {
  console.log('🚀 Starting country translation process...\n');
  console.log(`📂 Reading from: ${DATA_DIR}\n`);
  
  const files = readdirSync(DATA_DIR)
    .filter(f => f.endsWith('.ts') && !f.startsWith('_'))
    .map(f => join(DATA_DIR, f));

  console.log(`📋 Found ${files.length} country files to translate\n`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(`\n[${i + 1}/${files.length}] Processing ${file.split('/').pop()}...`);
    
    try {
      await translateCountryFile(file);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`❌ Error translating ${file}:`, error);
    }
  }

  console.log('\n\n✅ Translation complete!');
  console.log(`📊 Translated ${files.length} countries`);
}

main().catch(console.error);
