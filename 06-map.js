// Transforme o array birds em outro array que contenha SOMENTE os nomes dos pássaros, porém com letras maiúsculas

const birds = [
  { id: 'DV8', name: 'Eurasian Collared-Dove', type: 'Dove' },
  { id: 'HK12', name: 'Bald Eagle', type: 'Hawk' },
  { id: 'HK6', name: 'Red-Tailed Hawk', type: 'Hawk' },
  { id: 'SP11', name: 'Old World Sparrow', type: 'Sparrow' },
  { id: 'DV2', name: 'Mourning Dove', type: 'Dove' },
];

const birdsName = (birdSpecies) => {
  return birdSpecies.map((bird) => bird.name)
    .map((specie) => specie.toUpperCase());
  // return species.map( (specie) => specie.toUpperCase()); 
}

console.log(birdsName(birds));