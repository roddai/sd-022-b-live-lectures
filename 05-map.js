// 1. Transforme (Mapeie) o array de objetos cities em um array de strings com o seguinte formato:
// a) "${nomeDaCidade} - ${siglaDoEstado}"

const cities = [
  { state: "AM", name: "Manaus" , region: "N" },
  { state: "PA", name: "Belém" , region: "N" },
  { state: "TO", name: "Porto Nacional" , region: "N" },
  { state: "MG", name: "Lavras" , region: "SE" },
  { state: "BA", name: "Feira de Santana" , region: "NE" },
  { state: "PR", name: "Cascavel" , region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" }
];

const citiesAndStatesWithFor = (array) => {
  const myArray = [];

  for (let index = 0; index < array.length; index += 1) {
    myArray.push(`${array[index].name} - ${array[index].state}`);
  }
  return myArray;
}

// const citiesAndStates = (array) => {
//   return array.map( (city) => {
//     return `${city.name} - ${city.state}`
//   } );
// }

const citiesAndStates = (array) => array.map( (city) => `${city.name} - ${city.state}`);

// console.log(citiesAndStatesWithFor(cities));
console.log(citiesAndStates(cities));
// console.table(citiesAndStates(cities));