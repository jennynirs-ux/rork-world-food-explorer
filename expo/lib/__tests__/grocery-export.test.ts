import { countries } from '@/data/countries';
import { MealPlan } from '@/types';
import { aggregateGroceries, getPlannedRecipe } from '../grocery-export';

const indonesia = countries.find(c => c.id === 'indonesia')!;

const plan = (overrides: Partial<MealPlan>): MealPlan => ({
  id: 'p1',
  date: '2026-03-10',
  countryId: 'indonesia',
  recipeId: indonesia.mainDish.id,
  mealType: 'dinner',
  ...overrides,
});

describe('grocery export', () => {
  it('uses the dessert for dessert slots even when the id has no "-dessert" suffix', () => {
    expect(indonesia.dessert?.id).toBe('indonesia-klepon');
    const dessertPlan = plan({ recipeId: 'indonesia-klepon', mealType: 'dessert' });
    expect(getPlannedRecipe(indonesia, dessertPlan)).toBe(indonesia.dessert);
    expect(getPlannedRecipe(indonesia, plan({}))).toBe(indonesia.mainDish);

    const items = aggregateGroceries([dessertPlan], countries);
    expect(items).toHaveLength(indonesia.dessert!.ingredients.length);
  });

  it('merges the same ingredient across meals and translates names', () => {
    const plans = [plan({ id: 'a' }), plan({ id: 'b', date: '2026-03-11' })];
    const en = aggregateGroceries(plans, countries);
    const first = indonesia.mainDish.ingredients[0];
    const merged = en.find(i => i.name === (typeof first.name === 'string' ? first.name : first.name.en));
    expect(merged?.amount).toBeCloseTo(first.amount * 2);

    const sv = aggregateGroceries(plans, countries, 'sv');
    expect(sv).toHaveLength(en.length);
    const svName = typeof first.name === 'string' ? first.name : first.name.sv;
    expect(sv.map(i => i.name)).toContain(svName);
  });
});
