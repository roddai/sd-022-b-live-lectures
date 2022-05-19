const { multiply } = require('./09-default-params');

describe('testa a função multiply', () => {
  test('inserindo dois valores, retorna a multiplicação entre eles', () => {
    expect(multiply(8)).toBe(8);
    expect(multiply(8, 2)).toBe(16);
    expect(multiply(8, 3)).toBe(24);
    expect(multiply(8, -1)).toBe(-8);
  });
});