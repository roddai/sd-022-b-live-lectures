const getNumberOfDaysInMonth = (month) => {
  switch (parseInt(month)) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
    case 13:
      throw new Error('Mês inválido, mas tem pagamento extra');
    default:
      throw new Error('Mês inválido');
  }

  // uncaught: não pego
  // throw: lançar
  // try: experimentar
  // catch: pegar

};
const renderAmountOfDaysInMonth = () => {
  try {
    const month = document.getElementById('month').value;
    const result = document.getElementById('result');
    result.innerHTML = `O mês ${month} tem ${getNumberOfDaysInMonth(month)} dias`;
    
  } catch (error) {
    // result.innerHTML = `${error.message}`;
    alert(`Erro: ${error.message}`);
    document.getElementById('result').innerHTML = '';
    
  } finally {
    document.getElementById('month').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', renderAmountOfDaysInMonth);
};
