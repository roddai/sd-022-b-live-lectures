// SEM REST
// const formatDate = (year, month, day, hour, minute, second) => {
//   console.log(hour, minute, second);
//   return `${day}/${month}/${year}`
// }

const dateInfo = ['1981', '7', '31', '22', '47', '12'];

// COM REST
const formatDate = (year, month, day, ...rest) => `${day}/${month}/${year} - ${rest.join(':')}`

// console.log(formatDate(...dateInfo)); //spread operator
//'31/7/1981'

module.exports = { formatDate, dateInfo }