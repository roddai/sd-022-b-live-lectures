let lotteryNumbers = [34, 43, 23, 56, 28, 6];

// console.log(lotteryNumbers);
// console.log(lotteryNumbers[0]);
// console.log(lotteryNumbers[1]);
// console.log(lotteryNumbers[2]);
// console.log(lotteryNumbers[3]);
// console.log(lotteryNumbers[4]);
// console.log(lotteryNumbers[5]);

// console.log(lotteryNumbers.length); // 6

// Usando FOR convencional
for (let index = 0; index < lotteryNumbers.length; index += 1) {
  // console.log(index);
  console.log('Índice:', index, '->', 'Valor:', lotteryNumbers[index]);
}

// Usando FOR OF
for (let lottery of lotteryNumbers) {
  console.log(lottery);
}