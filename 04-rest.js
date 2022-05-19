// const sumAll = (values) => {
//   let sum = 0;

//   values.forEach((value) => {
//     sum += value;
//   });

//   return sum;
// };

// const sumAll = (...params) => {
//   let sum = 0;

//   params.forEach((param) => {
//     sum += param;
//    });

//    return sum;
// };

const sumAll = (...params) => params.reduce((acc, curr) => acc + curr, 0);

// console.log( sumAll(1, 2) );
// console.log( sumAll(1, 2, 3) );
// console.log( sumAll(1, 2, 3, 4, 5) );

module.exports = { sumAll }