//Realizando o jogo
let jogoAelida = [5, 25, 58, 35, 10, 28];
let jogoRods = [13, 21, 36, 15, 49, 8];
let jogoGian = [4, 10, 20, 33, 40, 42];

//Jogo Loteria
function randomNumber() {
  return Math.floor(Math.random() * 60) + 1;
}

function generateNumbers () {
  let sorteioLoteria = [];

  for (let index = 0; index < 6; index += 1) {
    sorteioLoteria.push(randomNumber());
  }
  return sorteioLoteria;
}

let lotteryNumbers = generateNumbers();

// COmparando os jogos
function megaSenaChecker(sorteioLoteria, sorteioPessoa) {
  let acertos = 0;

  for(let index = 0; index < sorteioLoteria.length; index += 1){
    
    for (let index2 = 0; index2 < sorteioPessoa.length; index2 += 1){
      if (sorteioPessoa[index2] === sorteioLoteria[index]) {
        acertos += 1;
      }
    }
  }
  return acertos;
}


console.log('Jogo Aélida: ' + jogoAelida);
console.log('Sorteio Loteria: ' + lotteryNumbers);
console.log('Acertos: ' + megaSenaChecker(lotteryNumbers, jogoAelida));
console.log('---------')
console.log('Jogo Rods: ' + jogoRods);
console.log('Sorteio Loteria: ' + lotteryNumbers);
console.log('Acertos: ' + megaSenaChecker(lotteryNumbers, jogoRods));
console.log('---------')
console.log('Jogo Gian: ' + jogoGian);
console.log('Sorteio Loteria: ' + lotteryNumbers);
console.log('Acertos: ' + megaSenaChecker(lotteryNumbers, jogoGian));