// const { richestDuckInTheWorld } = require('./06-destructuring');

// describe('testa concatenação de dados de um objeto', () => {
//   test('verifica se é possivel concatenar os dados do objeto richestDuckInTheWorld', () => {
//     expect(`${richestDuckInTheWorld.name} from ${richestDuckInTheWorld.birthplace}`).toBe('Scrooge McDuck from Glasgow, Scotland');
//   });
// });

const { name, birthplace } = require('./06-destructuring');

describe('testa concatenação de dados de um objeto', () => {
  test('verifica se é possivel concatenar os dados do objeto richestDuckInTheWorld', () => {
    expect(`${name} from ${birthplace}`).toBe('Scrooge McDuck from Glasgow, Scotland');
  });
});
