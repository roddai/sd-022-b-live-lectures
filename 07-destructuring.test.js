const { animalDescription, lion, blueWhale, polarBear } = require('./07-destructuring')

describe('testa concatenação de dados de um objeto', () => {
  test('verifica se é possivel concatenar os dados dos objetos lion, blueWhale, polarBear', () => {
    expect(animalDescription(lion)).toBe('Lion (Panthera leo) weighs around 186.55-225 kg');
    expect(animalDescription(blueWhale)).toBe('Blue whale (Balaenoptera musculus) weighs around 45-173 t');
    expect(animalDescription(polarBear)).toBe('Polar Bear (Ursus maritimus) weighs around 350-700 kg');
  });
});