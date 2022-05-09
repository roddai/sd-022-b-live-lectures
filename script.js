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
    default:
      return 'Mês inválido';
  }
};
const renderAmountOfDaysInMonth = () => {
  const month = document.getElementById('month').value;
  const result = document.getElementById('result');
  result.innerHTML = `O mês ${month} tem ${getNumberOfDaysInMonth(month)} dias`;
  document.getElementById('month').value = '';
};

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', renderAmountOfDaysInMonth);
};
