const users = [
  { firstName: 'Homer', lastName: 'Simpson', canDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', canDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', canDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', canDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', canDriver: false },
];

function comparar(a, b) {
  if (a.firstName < b.firstName) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a deve ser igual a b
  return 0;
}

console.log(users.sort(comparar));