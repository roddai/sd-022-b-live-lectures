const quadrinhos2 = {
  collection: 'Sherlock Holmes',
  title: 'o cão dos Baskervilles',
}

const objetoAutor = {
  author: 'Rich Burlew',
  collection: 'Sherlock Holmes - return',
}

/* OBJECT ASSIGN
// 1 - Copiando objetos
Object.assign(DESTINO    , ORIGEM);*/
// Object.assign(quadrinhos2, objetoAutor);

// 2 - Clonando objetos
const cloneDeQuadrinhos2 = (Object.assign({}, quadrinhos2));
const cloneTotal = (Object.assign({}, quadrinhos2, objetoAutor));


console.table(quadrinhos2);
console.table(cloneDeQuadrinhos2);
console.table(objetoAutor);
console.table(cloneTotal);
// console.table(quadrinhos2);
// console.table(objetoAutor);
