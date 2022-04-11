let person = {
  firstName: 'Joana',
  lastName: 'Pereira',
  agePerson: 43,
  canDrive: true,
  favoriteMovies: ['Spider Man', 'Matrix'],
  favoriteNumbers: [3, 4, 6],
  favoriteAlbuns: ['Skank'],
};

// Dot notation (notação por ponto)
person.firstName = 'Cassia';
person.city = 'São Paulo';

// console.log('Name:', person);
// console.log('Name:', person.firstName);
// console.log('Age:', person.agePerson);
// console.log('Favorite Movie 1:', person.favoriteMovies[0]);
// console.log('Favorite Movie 2:', person.favoriteMovies[1]);

// Bracket Notation (notação por colchetes)
person['favoriteFood'] = 'Doritos';
person['firstName'] = 'Rita';
person['user'] = ['user1', 'user2', 'user3'];

// Adiciona objeto
person['address'] = {
  street: 'Rua XYZ',
  number: 345,
}

delete person.city;

// console.log(person);
// console.log(person.address.street);
// console.log(person.address['street']);
// console.log(person['address']['street']);

for (let key in person) {
  console.log('Key:', key, '-->', 'Value:', person[key]);
}