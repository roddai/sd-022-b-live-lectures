const sum = require('./script');

test('Soma 1 + 2 para igualar a 3', () => {
  // expect().matcher()
  expect(sum(1, 2)).toBe(3);
});

test('Soma 5.1 + 6.55 para igualar a 11.65', () => {
  expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
});

test('Soma 0 + 0 para igualar a 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('Soma -5 + (-39)) para igualar a -44', () => {
  expect(sum(-5, -39)).toBe(-44);
});

test('Soma 0 + (-10)) para igualar a -10', () => {
  expect(sum(0, -10)).toBe(-10);
});