import { toAppPath } from '../../app/+native-intent';

describe('deep links', () => {
  it.each([
    ['worldfoodexplorer://country/italy', '/country/italy'],
    ['worldfoodexplorer://country/italy?tab=recipes', '/country/italy?tab=recipes'],
    ['/country/japan', '/country/japan'],
    ['worldfoodexplorer://collections', '/collections'],
    ['worldfoodexplorer://', '/'],
    ['worldfoodexplorer://country/italy?tab=evil', '/country/italy'],
    ['worldfoodexplorer://some/unknown/path', '/'],
    ['https://example.com/country/../../etc', '/'],
  ])('%s → %s', (input, expected) => {
    expect(toAppPath(input)).toBe(expected);
  });
});
