const users = [
  { firstName: 'Homer', lastName: 'Simpson', canDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', canDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', canDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', canDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', canDriver: false },
];

const primeiroQueNaoPodeDirigir = () => users.find((user) => user.canDriver === false);

console.log(primeiroQueNaoPodeDirigir());
