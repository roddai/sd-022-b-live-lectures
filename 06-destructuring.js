//OBJECT DESTRUCTURING
// Extraia as informações de name e birthplace do objeto para montar uma frase!

const richestDuckInTheWorld = {
  name: 'Scrooge McDuck',
  birthplace: 'Glasgow, Scotland',
  city: 'Duckburg',
  jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
};

const { name, birthplace, jobs } = richestDuckInTheWorld;
const [firstJob, secondJob, thirdJob, ...rest] = jobs;

// console.log(name);
// console.log(birthplace);
// console.log(jobs);
// console.log(firstJob);
// console.log(secondJob);
// console.log(thirdJob);
// console.log(rest);

// console.log(`${name} from ${birthplace}`);

module.exports = { name, birthplace };