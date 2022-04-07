let lotteryNumbers = [];

//Sorteio dos números
let firstNumber = Math.floor(Math.random() * 60) + 1;
let secondNumber = Math.floor(Math.random() * 60) + 1;
let thirdNumber = Math.floor(Math.random() * 60) + 1;
let fourthNumber = Math.floor(Math.random() * 60) + 1;
let fifthNumber = Math.floor(Math.random() * 60) + 1;
let sixthNumber = Math.floor(Math.random() * 60) + 1;

lotteryNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

// for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
//   console.log(lotteryNumbers[indexLottery]);
// }

//Meu jogo
let myGame = [4, 8, 15, 16, 23, 42];

// for (let indexGame = 0; indexGame < myGame.length; indexGame += 1) {
//   console.log(myGame[indexGame]);
// }

// Compara o sorteio com meu jogo
let numberOfHits = 0;

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
  // console.log('Número sorteado', lotteryNumbers[indexLottery]);
  for (let indexGame = 0; indexGame < myGame.length; indexGame += 1) {
    // console.log('Meu número', myGame[indexGame]);
    if (lotteryNumbers[indexLottery] === myGame[indexGame]) {
      numberOfHits += 1;
    }
  }
}

console.log('Números sorteados', lotteryNumbers);
console.log('Jogo do Rods', myGame);
console.log(numberOfHits);