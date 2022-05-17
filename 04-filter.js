// 1. Encontre todas as cidades que comecem com a letra C;

const cities = [
  { state: 'AM', name: 'Manaus', region: 'N'},
  { state: 'PA', name: 'Belém', region: 'N'},
  { state: 'TO', name: 'Porto Nacional', region: 'N'},
  { state: 'MG', name: 'Nepomuceno', region: 'SE'},
  { state: 'BA', name: 'Cachoeira', region: 'NE'},
  { state: 'PR', name: 'Curitiba', region: 'S'},
  { state: 'SP', name: 'Hortolândia', region: 'SE'},
  { state: 'RN', name: 'Touros', region: 'NE'},
  { state: 'CE', name: 'Jericoacoara', region: 'NE'},
  { state: 'TO', name: 'Três Pedras', region: 'N'},
  { state: 'MG', name: 'João Pinheiro', region: 'SE'}
];

// const citiesC = (array) => {
//   return array.filter( (cityC) => {
//     return cityC.name.startsWith('C');
//     // return cityC.name.endsWith('o');
//   } );
// }

const citiesC = (array) => array.filter( (cityC) => cityC.name.startsWith('C'));

console.log(citiesC(cities));