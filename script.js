window.onload = function () {
  console.log('Hello!');
} 

console.log(window.onload);

// window.onload = function () {  // função anônima
//   let button = document.getElementById('start-race-btn');

//   let car1 = document.querySelector('.car1');
//   let car2 = document.querySelector('.car2');

//   function resetCars(carroA, carroB) {
//     carroA.style.marginLeft = 0;
//     carroB.style.marginLeft = 0;
//   }

//   resetCars(car1, car2);

//   // 1- Qual o tipo de evento devo escutar?
//   // 2 - O que eu faço quando esse evento acontecer?
//   button.addEventListener('click', function () {
//     car1.style.marginLeft = parseInt(car1.style.marginLeft) + (Math.random() * 100) + 'px';
//     car2.style.marginLeft = parseInt(car2.style.marginLeft) + (Math.random() * 100) + 'px';

//     if (parseInt(car1.style.marginLeft) > window.innerWidth){
//       alert('Carro 1 ganhou!!!!');
//       resetCars(car1, car2);
//     }

//     if (parseInt(car2.style.marginLeft) > window.innerWidth){
//       alert('Carro 2 ganhou!!!!');
//       resetCars(car1, car2);
//     }
//   });
// }
