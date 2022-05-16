const pizzas = [
  { flavor: 'Frango com Catupiry', price: 12.20 },
  { flavor: 'Marguerita', price: 13.50},
  { flavor: 'Gratinada', price: 15.32},
  { flavor: 'Quatro Queijos', price: 13.63 }
];

const infoPizzas = () => {
  pizzas.forEach((pizza) => console.log(`A pizza de ${pizza.flavor} custa R$ ${pizza.price}`));
}

infoPizzas();

// A pizza de xyz custa R$ klm,00