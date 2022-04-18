// window.onload = function () {
//   console.log('Hello!');
// } 

// window.onload = function () {
//   console.log('palmas');
// }

// function func1() {
//   console.log('café');
// }

// func1();

window.onload = function () {
  let button = document.getElementById('start-race-btn');
  // 1. qual o tipo de evento devo executar?
  // 2. o que faço quando este evento acontecer?
  let car1 = document.querySelector('.car1');
  let car2 = document.querySelector('.car2');

  car1.style.marginLeft = 0;
  car2.style.marginLeft = 0;

  // button.addEventListener(1, 2);
  button.addEventListener('click', function () {
    car1.style.marginLeft = parseInt(car1.style.marginLeft) + (Math.random() * 100) + 'px';
    car2.style.marginLeft = parseInt(car2.style.marginLeft) + (Math.random() * 100) + 'px';

    
    // car2.style.marginLeft = '200px';

  // Vamos usar em alguns projetos
    // console.log(event); // evento com todos os dados do elemento criado
    // console.log(event.target); // captura o elemento clicado
    // console.log(event.target.innerHTML); // captura o texto do elemento clicado
    // console.log(event.target.id); // captura o id do elemento clicado
    // console.log(event.target.className);// captura a classe do elemento clicado
  });
}
