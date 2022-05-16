const filmes = [
  {id: 'film-a-6734', filme: 'Homem de Ferro 2'}, 
  {id: 'film-a-6735', filme: 'Thor'},
  {id: 'film-a-6736', filme: 'Capitã Marvel'},
  {id: 'film-a-6737', filme: 'Gardiões da Galáxia'},
  {id: 'film-a-6738', filme: 'Capitão América 2 - O soldado invernal'},
  {id: 'film-a-6739', filme: 'Viúva Negra'},
];

const sessoes = [
  {id: 'film-a-6734', sala: 1},
  {id: 'film-a-6737', sala: 2},
  {id: 'film-a-6739', sala: 3},
  {id: 'film-a-6735', sala: 4},
  {id: 'film-a-6736', sala: 5},
  {id: 'film-a-6738', sala: 6},
];

// Qual é o filme que está passando na sala 4?
const filmesSessao = () => {
  return film = filmes.find((filme) => filme.id === (sessoes.find((sessao) => sessao.sala === 4)).id);
}

console.log(filmesSessao());