import {
  getDishForDay,
  getDishOfTheDay,
  isDessertDay,
  localDayNumber,
  msUntilNextLocalDay,
  weekdayOfDayNumber,
} from '../daily';
import { countries as realCountries } from '@/data/countries';
import type { Country, Recipe } from '@/types';

function recipe(id: string): Recipe {
  return {
    id,
    name: id,
    description: '',
    cookingTime: 30,
    servings: 4,
    dietType: 'meat',
    ingredients: [],
    steps: [],
  };
}

function country(id: string, withDessert = true): Country {
  return {
    id,
    name: id,
    code: id.slice(0, 2).toUpperCase(),
    continent: 'Europe',
    flag: '',
    description: '',
    facts: [],
    foodCulture: '',
    mainDish: recipe(`${id}-main`),
    dessert: withDessert ? recipe(`${id}-dessert`) : undefined,
    drinks: { alcoholic: '', nonAlcoholic: '' },
    music: [],
    decorationIdeas: [],
    conversationStarters: [],
    quiz: [],
  };
}

const COUNTRIES = Array.from({ length: 12 }, (_, i) => country(`country-${String(i).padStart(2, '0')}`));

/**
 * A Date for `utcInstant` as seen by a device whose clock is `offsetHours`
 * ahead of UTC: the local getters return that zone's wall-clock date. (Jest
 * can't switch the process time zone at runtime, so this simulates it.)
 */
function dateInZone(utcInstant: number, offsetHours: number): Date {
  const wallClock = new Date(utcInstant + offsetHours * 3_600_000);
  const date = new Date(utcInstant);
  date.getFullYear = () => wallClock.getUTCFullYear();
  date.getMonth = () => wallClock.getUTCMonth();
  date.getDate = () => wallClock.getUTCDate();
  date.getDay = () => wallClock.getUTCDay();
  date.getHours = () => wallClock.getUTCHours();
  return date;
}

describe('localDayNumber', () => {
  it('counts local calendar days', () => {
    expect(localDayNumber(new Date(1970, 0, 1, 12))).toBe(0);
    expect(localDayNumber(new Date(1970, 0, 2, 0, 0, 1))).toBe(1);
    expect(localDayNumber(new Date(2026, 8, 30, 8)) - localDayNumber(new Date(2026, 8, 29, 20))).toBe(1);
  });

  it('is the same for the whole local day, including DST switch days', () => {
    // Late March / late October are 23- or 25-hour days in many time zones.
    for (const [y, m, d] of [[2026, 2, 29], [2026, 9, 25], [2026, 8, 29]] as const) {
      const start = localDayNumber(new Date(y, m, d, 0, 0, 0));
      expect(localDayNumber(new Date(y, m, d, 23, 59, 59))).toBe(start);
      expect(localDayNumber(new Date(y, m, d + 1, 0, 0, 0))).toBe(start + 1);
    }
  });

  it('uses the local date, not the UTC date', () => {
    // 2026-09-29 20:00 UTC is still the 29th in Los Angeles (UTC-7) but
    // already the 30th in Auckland (UTC+13).
    const instant = Date.UTC(2026, 8, 29, 20, 0);
    const la = localDayNumber(dateInZone(instant, -7));
    const akl = localDayNumber(dateInZone(instant, 13));
    expect(la).toBe(localDayNumber(new Date(2026, 8, 29, 12)));
    expect(akl).toBe(la + 1);
  });
});

describe('weekdayOfDayNumber', () => {
  it('matches Date#getDay for local dates', () => {
    for (let d = 1; d <= 14; d++) {
      const date = new Date(2026, 8, d, 12);
      expect(weekdayOfDayNumber(localDayNumber(date))).toBe(date.getDay());
    }
  });
});

describe('getDishOfTheDay', () => {
  it('returns null without countries', () => {
    expect(getDishOfTheDay([], new Date(2026, 8, 29))).toBeNull();
  });

  it('is stable within a local day', () => {
    const morning = getDishOfTheDay(COUNTRIES, new Date(2026, 8, 29, 0, 0, 1));
    const noon = getDishOfTheDay(COUNTRIES, new Date(2026, 8, 29, 12, 0));
    const night = getDishOfTheDay(COUNTRIES, new Date(2026, 8, 29, 23, 59, 59));
    expect(noon).toEqual(morning);
    expect(night).toEqual(morning);
  });

  it('changes from one day to the next', () => {
    const start = localDayNumber(new Date(2026, 0, 1, 12));
    // Several full cycles, including the boundaries between them.
    for (let day = start; day < start + COUNTRIES.length * 6; day++) {
      const today = getDishForDay(COUNTRIES, day)!;
      const tomorrow = getDishForDay(COUNTRIES, day + 1)!;
      expect(tomorrow.country.id).not.toBe(today.country.id);
    }
    const lateEvening = getDishOfTheDay(COUNTRIES, new Date(2026, 8, 29, 23, 59));
    const justAfterMidnight = getDishOfTheDay(COUNTRIES, new Date(2026, 8, 30, 0, 1));
    expect(justAfterMidnight!.country.id).not.toBe(lateEvening!.country.id);
  });

  it('switches at local midnight, whatever the time zone', () => {
    const instant = Date.UTC(2026, 8, 29, 20, 0);
    const la = getDishOfTheDay(COUNTRIES, dateInZone(instant, -7))!;
    const akl = getDishOfTheDay(COUNTRIES, dateInZone(instant, 13))!;
    expect(la).toEqual(getDishOfTheDay(COUNTRIES, new Date(2026, 8, 29, 12)));
    expect(akl).toEqual(getDishOfTheDay(COUNTRIES, new Date(2026, 8, 30, 12)));
    expect(akl.country.id).not.toBe(la.country.id);
  });

  it('serves every country once per cycle', () => {
    const cycleStart = Math.ceil(localDayNumber(new Date(2026, 8, 29)) / COUNTRIES.length) * COUNTRIES.length;
    const seen = new Set<string>();
    for (let day = cycleStart; day < cycleStart + COUNTRIES.length; day++) {
      seen.add(getDishForDay(COUNTRIES, day)!.country.id);
    }
    expect(seen.size).toBe(COUNTRIES.length);
  });

  it('does not depend on the order of the country list', () => {
    const reversed = [...COUNTRIES].reverse();
    for (let day = 20000; day < 20030; day++) {
      expect(getDishForDay(reversed, day)!.country.id).toBe(getDishForDay(COUNTRIES, day)!.country.id);
    }
  });

  it('serves desserts on Sundays and main dishes otherwise', () => {
    const sunday = new Date(2026, 9, 4, 10); // Sunday 4 Oct 2026
    const monday = new Date(2026, 9, 5, 10);
    expect(sunday.getDay()).toBe(0);
    expect(isDessertDay(localDayNumber(sunday))).toBe(true);

    const sundayDish = getDishOfTheDay(COUNTRIES, sunday)!;
    expect(sundayDish.kind).toBe('dessert');
    expect(sundayDish.recipe).toBe(sundayDish.country.dessert);

    const mondayDish = getDishOfTheDay(COUNTRIES, monday)!;
    expect(mondayDish.kind).toBe('main');
    expect(mondayDish.recipe).toBe(mondayDish.country.mainDish);
  });

  it('falls back to the main dish when a country has no dessert', () => {
    const noDesserts = COUNTRIES.map(c => ({ ...c, dessert: undefined }));
    const dish = getDishOfTheDay(noDesserts, new Date(2026, 9, 4, 10))!;
    expect(dish.kind).toBe('main');
    expect(dish.recipe).toBe(dish.country.mainDish);
  });

  it('works with the real country data', () => {
    const count = realCountries.length;
    const cycleStart = Math.ceil(localDayNumber(new Date(2026, 8, 29, 12)) / count) * count;
    const seen = new Set<string>();
    for (let day = cycleStart; day < cycleStart + count; day++) {
      const dish = getDishForDay(realCountries, day)!;
      expect(dish.recipe.cookingTime).toBeGreaterThan(0);
      expect(dish.recipe.imageUrl).toBeTruthy();
      seen.add(dish.country.id);
    }
    expect(seen.size).toBe(count);
  });
});

describe('msUntilNextLocalDay', () => {
  it('counts down to local midnight', () => {
    expect(msUntilNextLocalDay(new Date(2026, 8, 29, 23, 59, 0))).toBe(60_000);
    expect(msUntilNextLocalDay(new Date(2026, 8, 29, 12, 0, 0))).toBe(12 * 3_600_000);
  });
});
