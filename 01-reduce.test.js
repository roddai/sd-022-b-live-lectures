const { sum } = require('./01-reduce');

describe('The sum function', () => {
  it('is a function', () => {
    expect(typeof sum).toBe('function');
  });
  
  it('sums all numbers from array', () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([2, 3, 4, 6, 8, 12, 24])).toBe(59);
    expect(sum([4, 8, 15, 16, 23, 42])).toBe(108);
  });
});