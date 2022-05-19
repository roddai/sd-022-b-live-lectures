const array = ["Ana Joana", "Alberto", "Joaquim"];

console.log(array);

// Imprimir cada elemento do array
console.log(`${array[0]} ${array[1]} ${array[2]}`);
console.log(array[0], array[1], array[2]);
console.log(...array);

const myArray = [];

myArray.push(...array);
console.log(myArray);