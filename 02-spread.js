const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// Usando FOR
// let awesomeBooks = [];

// for (let index = 0; index < horrorBooks.length; index += 1) {
//   awesomeBooks.push(horrorBooks[index]);
// }

// for (let index = 0; index < scifiBooks.length; index += 1) {
//   awesomeBooks.push(scifiBooks[index]);
// }

//Usando ForEach
// let awesomeBooks = [];

// horrorBooks.forEach( (horrorBook) => {
//   awesomeBooks.push(horrorBook);
// } );

// scifiBooks.forEach( (scifiBook) => {
//   awesomeBooks.push(scifiBook);
// } );

// Usando Spread Operators
const awesomeBooks = [...horrorBooks, ...scifiBooks];

console.log(awesomeBooks);

module.exports = { awesomeBooks }