const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// Usando FOR
for (let index = 0; index < letters.length; index += 1) {
  console.log(`Com FOR: ${letters[index]}`);
}

// Usando FOREach
letters.forEach((letter, index, array) => console.log(`Com FOREach: ${letter}, index: ${index}, ${array} `));