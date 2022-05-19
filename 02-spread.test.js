const { awesomeBooks } = require('./02-spread');

describe('testa a união de dois arrays', () => {
  test('awesomeBooks é igual a união de horrorBooks e scifiBooks', () => {
    expect(awesomeBooks).toEqual(['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity']);
  });
});