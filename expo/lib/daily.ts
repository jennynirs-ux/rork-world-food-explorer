import type { Country, Recipe } from '@/types';
import { seededOrder } from '@/lib/shuffle';

/**
 * "Dish of the day": one country's dish per local calendar day. It only
 * depends on the date and the country list, so everyone sees the same dish
 * on the same day. Every country comes up exactly once per cycle (one cycle
 * = as many days as there are countries), each cycle in a different order.
 * Sundays serve the country's dessert instead of its main dish.
 */

export type DailyDishKind = 'main' | 'dessert';

export type DailyDish = {
  country: Country;
  recipe: Recipe;
  kind: DailyDishKind;
  /** Local calendar day this dish belongs to (see `localDayNumber`). */
  dayNumber: number;
};

const MS_PER_DAY = 86_400_000;
const SUNDAY = 0;

/**
 * Days since 1970-01-01 of the *local* calendar date of `date`. Two instants
 * on the same local day always give the same number (DST-safe, since only
 * the local year/month/day are used).
 */
export function localDayNumber(date: Date): number {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / MS_PER_DAY);
}

/** Day of the week (0 = Sunday) of a local day number. 1970-01-01 was a Thursday. */
export function weekdayOfDayNumber(dayNumber: number): number {
  return (((dayNumber + 4) % 7) + 7) % 7;
}

/** Sweet Sunday: desserts once a week. */
export function isDessertDay(dayNumber: number): boolean {
  return weekdayOfDayNumber(dayNumber) === SUNDAY;
}

function cycleSeed(cycle: number): string {
  return `dish-of-the-day:${cycle}`;
}

/**
 * Order of country indices for one cycle. If the new cycle would start with
 * the country the previous cycle ended on, the first two are swapped so the
 * same country never shows two days in a row.
 */
function cycleOrder(cycle: number, count: number): number[] {
  const order = seededOrder(cycleSeed(cycle), count);
  if (count > 2) {
    const previousLast = seededOrder(cycleSeed(cycle - 1), count)[count - 1];
    if (order[0] === previousLast) [order[0], order[1]] = [order[1], order[0]];
  }
  return order;
}

function byId(a: Country, b: Country): number {
  if (a.id < b.id) return -1;
  if (a.id > b.id) return 1;
  return 0;
}

/** Dish for a local day number (see `localDayNumber`). */
export function getDishForDay(countries: readonly Country[], dayNumber: number): DailyDish | null {
  const eligible = countries.filter(c => !!c.mainDish);
  if (eligible.length === 0) return null;

  // Sort by id so the result doesn't depend on the order of the input list.
  const ordered = [...eligible].sort(byId);
  const count = ordered.length;
  const cycle = Math.floor(dayNumber / count);
  const position = dayNumber - cycle * count;
  const country = ordered[cycleOrder(cycle, count)[position]];

  if (isDessertDay(dayNumber) && country.dessert) {
    return { country, recipe: country.dessert, kind: 'dessert', dayNumber };
  }
  return { country, recipe: country.mainDish, kind: 'main', dayNumber };
}

/** Dish of the day for the local calendar date of `date` (default: now). */
export function getDishOfTheDay(countries: readonly Country[], date: Date = new Date()): DailyDish | null {
  return getDishForDay(countries, localDayNumber(date));
}

/** Milliseconds from `now` until the next local midnight. */
export function msUntilNextLocalDay(now: Date = new Date()): number {
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.max(0, next.getTime() - now.getTime());
}
