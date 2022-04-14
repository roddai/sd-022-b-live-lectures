// 1. Onde eu quero adicionar os elementos?
let container = document.querySelector('#first');

// 2. Crio um elemento HTML via JS e personalizo-o
function createDivElement(classes) {
  let newDiv = document.createElement('div');
  newDiv.className = classes;

  return newDiv;
}

// let newDiv1 = document.createElement('div');
// newDiv1.className = 'square yellow small';

// let newDiv2 = document.createElement('div');
// newDiv2.className = 'circle red big';

// let newDiv3 = document.createElement('div');
// newDiv3.className = 'square green medium';

// 3. Adiciono o elemento criado na estrutura HTML
function addElementAsChild(parent, element) {
  parent.appendChild(createDivElement(element));
}

addElementAsChild(container, 'square yellow small');
addElementAsChild(container, 'circle red small');
addElementAsChild(container, 'square green medium');

// container.appendChild(createDivElement('square yellow small'));
// container.appendChild(createDivElement('circle red small'));
// container.appendChild(createDivElement('square green medium'));

// container.appendChild(newDiv2);
// container.appendChild(newDiv3);

