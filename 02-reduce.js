// Somar os valores pares do array

const numbers = [2, 3, 4, 6, 7, 12, 24];

// const sumEven = (array) => {
//   return array.reduce( (acc, curr) => {
//     // console.log(`Acc: ${acc} ---> Curr: ${curr}`);
//     if (curr % 2 !== 0) {
//       return acc + 0;
//     }
//     return acc + curr;
//   }, 0 );
// }

// const sumEven = (array) => {
//   const evenNumbers = array.filter( (number) => {
//     return number % 2 === 0;
//   } );

//   return array.reduce( (acc, curr) => {
//     if (curr % 2 !== 0) {
//       return acc + 0;
//     }
//     return acc + curr;
//   }, 0 );
// }

// const sumEven = (array) => {
//   const evenNumbers = array.filter( (number) => {
//     return number % 2 === 0;
//   } );

//   return evenNumbers.reduce( (acc, curr) => {
//     return acc + curr;
//   }, 0 );
// }

const sumEven = (array) => array
  .filter((number) => number % 2 === 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(sumEven(numbers));