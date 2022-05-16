// Multiplicar cada elemento do array por 3, retornando um novo array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = [];

// COM FOR
// for (let index = 0; index < numbers.length; index += 1) {
//   newArray.push(numbers[index] * 3);
// }

// console.log(newArray);

// COM FOREACH
// numbers.forEach((number) => newArray.push(number * 3));

// console.log(newArray);

// COM FOREACH na função
// const multiplicaPorTres = () => {
//   numbers.forEach((number) => newArray.push(number * 3));
//   return newArray;
// }

// console.log(multiplicaPorTres());


const multiplicaPorTres = (array) => {
  const newArray = [];
  array.forEach((number) => newArray.push(number * 3));
  return newArray;
}

// console.log(multiplicaPorTres(multiplicaPorTres([-2, 1, -5])));

module.exports = { multiplicaPorTres };