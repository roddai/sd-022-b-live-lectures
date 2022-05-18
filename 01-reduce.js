const numbers = [2, 3, 4, 6, 7, 12, 24];

// const sum = (array) => {
//   let accumulatorFor = array[0];

//   for (let index = 1; index < array.length; index += 1) {
//     // a ideia aqui é fazer um paralelo com o reduce, por isso não use `+=`
//     accumulatorFor = accumulatorFor + array[index];
//   }
//   return accumulatorFor;
// }

// const sum = (array) => {
//   return array.reduce( (accumulator, currentValue) => {
//     console.log(`Acc: ${accumulator} ---> Curr: ${currentValue}`);
//     return accumulator + currentValue;
//   }, 0 );
// }

const sum = (array) => array
  .reduce( (accumulator, currentValue) => accumulator + currentValue, 0 );

console.log(sum(numbers));

module.exports = { sum }