type SupportedLanguage = 'en' | 'sv' | 'es' | 'fr' | 'de' | 'it' | 'pl' | 'nl' | 'pt';

export type TranslatableContent = string | {
  en: string;
  sv?: string;
  es?: string;
  fr?: string;
  de?: string;
  it?: string;
  pl?: string;
  nl?: string;
  pt?: string;
};

export function translateContent(
  content: TranslatableContent | undefined,
  language: string = 'en'
): string {
  if (!content) return '';
  
  if (typeof content === 'string') {
    return content;
  }
  
  const lang = language as SupportedLanguage;
  return content[lang] || content.en;
}

export function translateArray<T extends TranslatableContent>(
  array: T[] | undefined,
  language: string = 'en'
): string[] {
  if (!array) return [];
  return array.map(item => translateContent(item, language));
}
