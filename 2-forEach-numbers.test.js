const { multiplicaPorTres } = require('./2-forEach-numbers');

describe ('The multiplicaPorTres function', () => {
  it('is a function', () => {
    expect(typeof multiplicaPorTres).toBe('function');
  });

  it('multiplies each number by 3', () => {
    expect(multiplicaPorTres([])).toEqual([]);
    expect(multiplicaPorTres([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
    expect(multiplicaPorTres([-2, 1, -5])).toEqual([-6, 3, -15]);
  });
});