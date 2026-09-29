const FRACTIONS: [number, string][] = [
  [1 / 4, '¼'],
  [1 / 3, '⅓'],
  [1 / 2, '½'],
  [2 / 3, '⅔'],
  [3 / 4, '¾'],
];

/**
 * Format an ingredient amount for display: whole numbers stay whole,
 * common kitchen fractions become ½ / ⅓ / ¼ …, everything else is rounded
 * to at most one decimal (two below 1, e.g. 0.25 tsp).
 */
export function formatAmount(amount: number): string {
  if (!Number.isFinite(amount) || amount <= 0) return '';
  const whole = Math.floor(amount);
  const rest = amount - whole;
  if (rest < 0.02) return String(whole);
  if (rest > 0.98) return String(whole + 1);
  if (amount < 10) {
    for (const [value, glyph] of FRACTIONS) {
      if (Math.abs(rest - value) < 0.02) return whole > 0 ? `${whole} ${glyph}` : glyph;
    }
  }
  const decimals = amount < 1 ? 2 : 1;
  return String(Number(amount.toFixed(decimals)));
}

/** Round a stored amount so shopping lists never hold 1.3333333. */
export function roundAmount(amount: number): number {
  return Math.round(amount * 100) / 100;
}
