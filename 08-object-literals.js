// Abbreviation object literal

const response = {
  name: 'Bruce Wayne',
  superheroName: 'Batman',
  nickname: 'The Caped Crusader',
  powers: 'Determination and money'
};

//Sem abbreviation object literal!
// const createSuperhero = (name, superheroName, nickname, powers) => {
//   return {
//     name: name,
//     superheroName: superheroName,
//     nickname: nickname,
//     powers: powers
//   };
// };

//Com abbreviation object literal!
const createSuperhero = (name, superheroName, nickname, powers) => {
  return {
    name,
    superheroName,
    nickname,
    powers
  };
};


// console.log(createSuperhero('Bruce Wayne', 'Batman', 'The Caped Crusader', 'Determination and money'))

module.exports = { createSuperhero, response };