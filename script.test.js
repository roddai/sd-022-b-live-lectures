const { sum, summationOf } = require('./script');

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

// ----
test('Espera que a função summationOf exista', () => {
  expect(typeof summationOf).toBe('function');
})

test('Espera-se que o somatório de 1 seja igual a 1', () => {
  expect(summationOf(1)).toBe(1);
})

test('Espera-se que o somatório de 3 seja igual a 6', () => {
  expect(summationOf(3)).toBe(6);
})

test('Espera-se que o somatório de 5 seja igual a 15', () => {
  expect(summationOf(5)).toBe(15);
})