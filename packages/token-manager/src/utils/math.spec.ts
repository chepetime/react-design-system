import { sum } from './math';

describe('Math operations', () => {
  test('sum(1, 2) returns 3', async () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
