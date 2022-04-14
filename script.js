// 1. Onde eu quero adicionar os elementos?
let container = document.querySelector('#first');

// 2. Crio um elemento HTML via JS e personalizo-o
function createDivElement(classes) {
  let newDiv = document.createElement('div');
  newDiv.className = classes;

  return newDiv;
}

// 3. Adiciono o elemento criado na estrutura HTML
function addElementAsChild(parent, element) {
  parent.appendChild(createDivElement(element));
}

let features = ['square yellow small', 'circle red small', 'square green medium'];

for (let fetClasses of features) {
  addElementAsChild(container, fetClasses);
}
