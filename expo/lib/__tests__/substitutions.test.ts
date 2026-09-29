import { countries } from '@/data/countries';
import { getSubstitutions, enrichWithSubstitutions } from '../substitutions';

const names = (ingredient: string) =>
  getSubstitutions(ingredient).map(s => (typeof s.name === 'string' ? s.name : s.name.en));

describe('getSubstitutions', () => {
  describe('previously wrong substring matches', () => {
    it('never suggests coconut milk for coconut milk', () => {
      expect(names('Coconut milk')).not.toContain('Coconut milk');
      expect(names('Coconut milk').length).toBeGreaterThan(0);
    });

    it('treats peanut butter as peanut butter, not butter', () => {
      expect(names('Peanut butter')).not.toContain('Coconut oil');
      expect(names('Peanut butter')).toContain('Sunflower seed butter');
    });

    it('does not see "egg" in eggplant', () => {
      expect(names('Eggplant')).toEqual([]);
      expect(names('Eggplants')).toEqual([]);
    });

    it('does not see "cream" in cream of tartar', () => {
      expect(names('Cream of tartar')).toEqual([]);
    });

    it('suggests a stock for chicken stock, not tofu', () => {
      expect(names('Chicken stock')).not.toContain('Tofu');
      expect(names('Chicken stock')).toContain('Vegetable stock');
      expect(names('Chicken or beef stock')).toContain('Vegetable stock');
    });

    it('ignores other products that contain a keyword', () => {
      expect(names('Rice flour')).toEqual([]);
      expect(names('Ice cream')).toEqual([]);
      expect(names('Onion powder')).toEqual([]);
      expect(names('Tomato paste')).toEqual([]);
      expect(names('Garrofó (butter beans)')).toEqual([]);
      expect(names('Palm butter')).toEqual([]);
      expect(names('Powdered sugar (for cream)')).toEqual([]);
    });
  });

  describe('sensible suggestions', () => {
    it('butter -> oils', () => {
      expect(names('Butter')).toContain('Coconut oil');
      expect(names('Unsalted butter, softened')).toContain('Coconut oil');
    });

    it('handles plurals and preparation notes', () => {
      expect(names('Eggs')[0]).toMatch(/^Flax egg/);
      expect(names('Potatoes, peeled and halved')).toContain('Sweet potato');
      expect(names('Onions, finely chopped')).toContain('Shallots');
    });

    it('prefers the most specific phrase', () => {
      expect(names('Soy sauce')).toContain('Tamari');
      expect(names('Sweet potatoes')).toContain('Butternut squash');
      expect(names('Egg whites')[0]).toMatch(/^Aquafaba/);
      expect(names('Egg noodles')).toEqual(['Rice noodles']);
      expect(names('All-purpose flour')).toContain('Almond flour');
    });

    it('suggests a glaze swap for egg wash', () => {
      expect(names('Egg (for brushing)')).toEqual(['Milk or plant milk']);
      expect(names('Egg yolk for brushing')).toEqual(['Milk or plant milk']);
    });

    it('accepts translated strings', () => {
      expect(getSubstitutions({ en: 'Milk', sv: 'Mjölk' }).length).toBeGreaterThan(0);
    });
  });

  describe('never suggests the ingredient itself', () => {
    it('skips alternatives the recipe already lists', () => {
      expect(names('Sweet potatoes')).not.toContain('Sweet potato');
      expect(names('Milk (or coconut milk)')).toEqual(['Oat milk']);
      expect(names('Lamb or beef')).not.toContain('Beef');
      expect(names('Lamb or beef')).toContain('Mushrooms');
      expect(names('Sugar or honey')).toEqual(['Maple syrup']);
    });

    it('holds for every ingredient in the recipe data', () => {
      const offenders: string[] = [];
      for (const country of countries) {
        for (const recipe of [country.mainDish, country.dessert]) {
          for (const ing of recipe?.ingredients ?? []) {
            const en = (typeof ing.name === 'string' ? ing.name : ing.name.en).toLowerCase();
            for (const sub of names(en)) {
              const core = sub.replace(/\(.*?\)/g, '').trim().toLowerCase();
              if (en === core || en.startsWith(`${core},`) || en.includes(`(or ${core})`)) {
                offenders.push(`${en} -> ${sub}`);
              }
            }
          }
        }
      }
      expect(offenders).toEqual([]);
    });
  });
});

describe('enrichWithSubstitutions', () => {
  it('fills in substitutions but keeps ones from the data', () => {
    const custom = [{ name: 'Tofu', ratio: 1 }];
    const result = enrichWithSubstitutions([
      { name: { en: 'Butter', sv: 'Smör' }, amount: 50, unit: 'g' },
      { name: 'Eggplant', amount: 1, unit: 'pcs' },
      { name: 'Chicken', amount: 1, unit: 'kg', substitutions: custom },
    ]);
    expect(result[0].substitutions?.length).toBeGreaterThan(0);
    expect(result[1].substitutions).toBeUndefined();
    expect(result[2].substitutions).toBe(custom);
  });
});
