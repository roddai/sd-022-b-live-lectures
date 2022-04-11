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