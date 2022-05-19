//DEFAULT DESTRUCTURING
// Faça uma função que receba um objeto representando um animal e retorne sua massa.

const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg'
  }
};

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't'
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700
  }
};

// const { name, commonName, weightRange } = lion;
// console.log(name);
// console.log(commonName);
// console.log(weightRange);


// const animalDescription = (animal) => {
//   return `${animal.commonName} (${animal.name}) weighs around ${animal.weightRange.min}-${animal
//     .weightRange.max} ${animal.weightRange.measurementUnit}`;
// };

const animalDescription = ({ name, commonName, weightRange }) => {
  const {min, max, measurementUnit = 'kg'} = weightRange;
  return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;
};

// console.log( animalDescription(lion) );
// console.log( animalDescription(blueWhale) );
// console.log( animalDescription(polarBear) );

// 'Lion (Panthera leo) weighs around 186.55-225 kg'

module.exports = { animalDescription, lion, blueWhale, polarBear }