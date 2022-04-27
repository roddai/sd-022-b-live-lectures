let button = document.getElementById('myModal');

let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

button.addEventListener('click', function () {
  myModal.show();
});
