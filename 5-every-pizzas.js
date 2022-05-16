const pizzas = [
  { flavor: 'Frango com Catupiry', price: 12.20 },
  { flavor: 'Marguerita', price: 13.50 },
  { flavor: 'Gratinada', price: 15.32 },
  { flavor: 'Quatro Queijos', price: 13.63 }
];

// Retorne TRUE caso TODAS as pizza tenham valor menor que 16,00 e FALSE caso contrário;
// const precoMenorQue13 = () => {

const todosMenoresQue16 = () => pizzas.every((pizza) => pizza.price < 16);

console.log(`Todos os preços são menores que R$16.00? ${todosMenoresQue16()}`);
