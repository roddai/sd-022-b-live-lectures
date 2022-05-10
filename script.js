function sum(a, b) {
  return a + b;
}

/**
 * Implemente uma função `summationOf(number)` que recebe um número inteiro e retorna o seu somatório\
 *
 * Por exemplo:
 *
 * - `summationOf(1)` retorna 1: soma de 1 até 1 = 1
 * - `summationOf(3)` retorna 6: soma de 1 até 3 = 1 + 2 + 3 = 6
 * - `summationOf(5)` retorna 15: soma de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15
 */

const summationOf = (number) => {
  let sommation = 0;

  for (let index = 1; index <= number; index += 1) {
    sommation += index;
  }
  return sommation;
}

module.exports = { sum, summationOf };