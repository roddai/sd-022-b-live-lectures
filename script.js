// 1. Onde eu quero adicionar os elementos?
let container = document.querySelector('#first');

// 2. Crio um elemento HTML via JS e personalizo-o
let newDiv1 = document.createElement('div');
newDiv1.className = 'square yellow small';

let newDiv2 = document.createElement('div');
newDiv2.className = 'circle red big';

let newDiv3 = document.createElement('div');
newDiv3.className = 'square green medium';

// 3. Adiciono o elemento criado na estrutura HTML
container.appendChild(newDiv1);
container.appendChild(newDiv2);
container.appendChild(newDiv3);

