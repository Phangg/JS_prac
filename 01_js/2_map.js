const numbers = [1, 2, 3]

// // 1. 
// const doubleN = function (number) {
//   return number * 2
// }
// const newArry = numbers.map(doubleN)
// console.log(newArry)

// // 2.
// const newArry = numbers.map(function (number) {
//   return number * 2
// })
// console.log(newArry)

// // 3. 
// const newArry = numbers.map((number) => {
//   return number * 2
// })
// console.log(newArry)

// 4. 
const newArry = numbers.map((number) => number * 2)
console.log(newArry)
