//Retornar SOMENTE os números ímpares do array

const numbers = [1, 2, 3, 4, 5];

const filterOdd = (array) => array.filter( (number) => number % 2 !== 0);

// const filterOdd = (array) => {
  // const oddNumbers = [];

  // for (let index = 0; index < array.length; index += 1) {
  //   if (array[index] % 2 !== 0) {
  //     oddNumbers.push(array[index]);
  //   }
  // }
  // return oddNumbers;

//   return array.filter( (number) => {
//     return number % 2 !== 0;
//   } );
// }

console.log(filterOdd(numbers));

module.exports = { filterOdd };
