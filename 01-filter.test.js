const { filterOdd } = require('./01-filter');

describe('The function filterOdd ', () => {
  it('is a function', () => {
    expect(typeof filterOdd).toBe('function');
  });
  // it('returns an array only with odd numbers', () => {
  it('is a function', () => {
    expect(typeof filterOdd).toBe('function');
  });
  it('returns an array only with odd numbers', () => {
    expect(filterOdd([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    expect(filterOdd([10, 25, -13, 2, 9])).toEqual([25, -13, 9]);
  });
});
