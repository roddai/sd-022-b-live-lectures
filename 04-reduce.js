// Reduza o array abaixo em um objeto conforme o exemplo abaixo
// {
//   'Adriano Imperador': 'didico@futebol.br',
//   'Ronaldinho Gaúcho': 'bruxo@futebol.br',
//   'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
//   'Marta Vieira da Silva': 'rainhamarta@futebol.br',
// }

const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
];

const newPlayers = (array) => {
  return array.reduce((acc, curr) => {
    acc[curr.fullName] = curr.email;
    return acc;
  }, {});
}

console.log(newPlayers(players));

// const theBestPlayers = {
//   'Adriano Imperador': 'didico@futebol.br',
//   'Ronaldinho Gaúcho': 'bruxo@futebol.br',
//   'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
//   'Marta Vieira da Silva': 'rainhamarta@futebol.br',
// }

// theBestPlayers['Rods Rosa'] = 'rods@futebol.br';

// console.log(theBestPlayers);