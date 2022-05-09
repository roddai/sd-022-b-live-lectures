const quadrinho1 = {
  collection: 'Tio Patinhas',
  title: 'O tesouro dos dez avatares'
};

quadrinho1.author = 'Don Rosa';
quadrinho1['publishingCompany'] = 'Editora Abril';

// CONSTRUTOR OBJECT
// 1 - Keys
console.log(Object.keys(quadrinho1));
console.log('quadrinhos1 possui a chave author? -> ', 
  Object.keys(quadrinho1).includes('author'));

// 2 - Values
console.log(Object.values(quadrinho1));
console.log('quadrinhos1 possui o valor Don Rosa? -> ', 
  Object.values(quadrinho1).includes('Don Rosa'));

// 3 - Entradas
console.log(Object.entries(quadrinho1));
console.log('quadrinhos1 possui o valor Don Rosa? -> ', 
  Object.entries(quadrinho1)[2].includes('Don Rosa'));

// QUAL O TIPO DE DADO DE UM ARRAY?
console.log(Object.keys(quadrinho1)); //object
console.log(typeof Object.keys(quadrinho1)); //object
console.log(Array.isArray(Object.keys(quadrinho1))); //true


// console.log(quadrinho1);
// console.log(`Qual é a coleção? -> ${quadrinho1.collection}`);
// console.log(quadrinho1.collection);
// console.log(quadrinho1.title);