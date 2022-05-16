const users = [
  { firstName: 'Homer', lastName: 'Simpson', canDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', canDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', canDriver: true },
  { firstName: 'Lisa', lastName: 'Simpson', canDriver: true },
  { firstName: 'Maggie', lastName: 'Simpson', canDriver: true },
];

const todosPodemDirigir = () => users.every((user) => user.canDriver === true);

console.log(todosPodemDirigir());