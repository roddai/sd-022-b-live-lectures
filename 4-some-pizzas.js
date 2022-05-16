const pizzas = [
  { flavor: 'Frango com Catupiry', price: 12.20 },
  { flavor: 'Marguerita', price: 13.50 },
  { flavor: 'Gratinada', price: 15.32 },
  { flavor: 'Quatro Queijos', price: 13.63 }
];

// Retorne TRUE caso exista uma pizza com valor menor que 13,00 e FALSE caso não exista;
// const precoMenorQue13 = () => {
//   for (let index = 0; index < pizzas.length; index += 1) {
//     if (pizzas[index].price < 13) {
//       result = true;
//       break;
//     } else {
//       result = false;
//     }
//   }
//   return result;
// }

const precoMenorQue13 = () => pizzas.some((pizza) => pizza.price < 13);

console.log(`Existe preço menor que R$13.00? ${precoMenorQue13()}`);
