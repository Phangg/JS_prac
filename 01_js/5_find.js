const avengers = [
  { name: 'Tony Stark', age: 45 },
  { name: 'Steve Roggers', age: 32 },
  { name: 'Thor', age: 45 },
]


// // 1
// const avenger = avengers.find(function (avenger) {
//   return avenger.name === 'Tony Stark'
// })
// console.log(avenger)

// 2
const avenger = avengers.find((avenger) => avenger.name === 'Tony Stark')
console.log(avenger)