const point = [1.0, 2.2, -6.6];
const otherPoint = [0.1, 3.5, -99.6];

const printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;


// console.log(printPointCoordinates(point[0], point[1], point[2]));
// console.log(printPointCoordinates(otherPoint[0], otherPoint[1], otherPoint[2]));

// console.log(printPointCoordinates(...point));
// console.log(printPointCoordinates(...otherPoint));

module.exports = { printPointCoordinates, point, otherPoint }