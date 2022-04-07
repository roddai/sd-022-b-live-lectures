//Sorteio dos números
let lotteryNumbers = [];

for (let index = 0; index < 6; index += 1) {
  lotteryNumbers.push(Math.floor(Math.random() * 60) + 1);
}

//Meu jogo
let myGame = [4, 8, 15, 16, 23, 42];

// Compara o sorteio com meu jogo
let numberOfHits = 0;

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
  for (let indexGame = 0; indexGame < myGame.length; indexGame += 1) {
    if (lotteryNumbers[indexLottery] === myGame[indexGame]) {
      numberOfHits += 1;
    }
  }
}

// Apresenta a quantidade de acertos
console.log('Números sorteados', lotteryNumbers);
console.log('Jogo do Rods', myGame);
console.log(numberOfHits);