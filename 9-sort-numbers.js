const numbers = [8, 5, 9, 3, 1, 7, 4, 2, 6]; //Funciona legal
const newNumbers = [8, 5, 9, 3, 1, 7, 10, 4, 2, 6]; //

// function comparar(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   // a deve ser igual a b
//   return 0;
// }

const comparar = (a, b) => a - b;

// console.log(numbers.sort());
// console.log(newNumbers.sort());
console.log(newNumbers.sort(comparar))