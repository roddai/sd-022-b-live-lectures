let name1 = 'Rods';
let name2 = 'Alex';
let name3 = 'Margareth';

function greet(param) {
  console.log('Hey ' + param);
}

greet(name1);
greet(name2);
greet(name3);

// -----------------
// sem return
// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// sum(1, 2);

// com return
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 2));

// -----------------
function max(a, b) {
  if (a > b) {
    return a;
  } 
    return 'Iguais'
}

console.log(max(25, 25));

// -----------------
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;

// let average = (num1 + num2 + num3) / 3;

// console.log(average);

function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(average(10, 20, 30));

// -----------------
function fullName(firstName, lastName) {
  return (firstName + ' ' + lastName);
}

console.log(fullName('Rodrigo', 'Rosa'));

// -----------------
function generateArray () {
  let array = [];

  for (let index = 1; index <= 100; index += 1) {
    let teste = Math.floor(Math.random() * 60);
    array.push(teste);
  }
  return array;
}

console.log(generateArray());