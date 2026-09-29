import { formatAmount, roundAmount } from '../format-amount';

describe('formatAmount', () => {
  it.each([
    [2, '2'],
    [2.0000001, '2'],
    [0.5, '½'],
    [1.5, '1 ½'],
    [1.3333333, '1 ⅓'],
    [0.25, '¼'],
    [0.2, '0.2'],
    [12.5, '12.5'],
    [250, '250'],
    [0, ''],
  ])('%p → %p', (input, expected) => {
    expect(formatAmount(input)).toBe(expected);
  });

  it('rounds stored amounts', () => {
    expect(roundAmount(1.3333333)).toBe(1.33);
  });
});
