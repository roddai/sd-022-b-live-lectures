// const { formatDate } = require('./05-rest');

// describe('testa a função formatDate', () => {
//   test('ao inserir os dados de uma data válida retorna a data formatada em DD/MM/YYYY', () => {
//     expect(formatDate('1981', '7', '31', '22', '47', '12')).toBe('31/7/1981');
//   });
// });

const { formatDate, dateInfo } = require('./05-rest');

describe('testa a função formatDate', () => {
  test('ao inserir os dados de uma data válida retorna a data formatada em DD/MM/YYYY', () => {
    expect(formatDate(...dateInfo)).toBe('31/7/1981');
  });
});