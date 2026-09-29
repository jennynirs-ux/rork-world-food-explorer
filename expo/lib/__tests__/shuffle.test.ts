import { seededOrder } from '../shuffle';
import { countries } from '@/data/countries';

describe('seededOrder', () => {
  it('is a stable permutation', () => {
    const a = seededOrder('japan:q1', 4);
    expect(seededOrder('japan:q1', 4)).toEqual(a);
    expect([...a].sort()).toEqual([0, 1, 2, 3]);
  });

  it('spreads correct answers across positions for the real quizzes', () => {
    const positions = [0, 0, 0, 0];
    for (const c of countries) {
      for (const q of c.quiz) {
        const order = seededOrder(`${c.id}:${q.id}`, q.options.length);
        positions[order.indexOf(q.correctAnswer)] += 1;
      }
    }
    const total = positions.reduce((a, b) => a + b, 0);
    for (const count of positions) {
      expect(count / total).toBeGreaterThan(0.18);
      expect(count / total).toBeLessThan(0.32);
    }
  });
});
