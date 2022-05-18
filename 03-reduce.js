const epic = ['A', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicPhrase = (array) => array.reduce( (acc, curr, index, arr) => `${acc} ${curr}`, 'StarWars epic phrase:' );

console.log(epicPhrase(epic));

// console.log('StarWars epic phrase:', epic.join(' '));