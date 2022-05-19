const { createSuperhero, response } = require('./08-object-literals');

describe('testa a função createSuperhero', () => {
  test('cria o superhero Bruce Wayne', () => {
    expect(createSuperhero('Bruce Wayne', 'Batman', 'The Caped Crusader', 'Determination and money')).toEqual(response);
  });
});