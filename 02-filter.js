// Mostrar SOMENTE os objetos com as pessoas que NÃO podem dirigir

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]

const filterNoDriverWithFor = (array) => {
  const noDrivers = [];
  
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].isDriver === false) {
      noDrivers.push(array[index]);
    }
  }
  return noDrivers;
}

console.log(filterNoDriverWithFor(users));
// ------
// const filterNoDriver = (array) => {
//   return array.filter( (user) => {
//     return (user.isDriver === false);
//   } );
// };

// console.log(filterNoDriver(users));
// ------
const filterNoDriver = (array) => array.filter( (user) => user.isDriver === false);

console.log(filterNoDriver(users));
