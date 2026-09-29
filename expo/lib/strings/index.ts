import { useTranslation, type LanguageCode } from '@/lib/i18n';

/**
 * Feature-local string tables. Each feature keeps its copy for all nine
 * languages in lib/strings/<feature>.ts instead of growing lib/i18n.ts:
 *
 *   export const paywallStrings: StringTable<{ title: string }> = { en: {...}, sv: {...}, ... };
 *   const s = useStrings(paywallStrings);
 */
export type StringTable<T> = Record<LanguageCode, T>;

export function pickStrings<T>(table: StringTable<T>, language: string): T {
  return table[language as LanguageCode] ?? table.en;
}

export function useStrings<T>(table: StringTable<T>): T {
  const { language } = useTranslation();
  return pickStrings(table, language);
}

/** Replace {name} placeholders. */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => (key in values ? String(values[key]) : `{${key}}`));
}
