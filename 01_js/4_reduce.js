const numbers = [90, 80, 70, 100]

// // 1
// const sumNum = numbers.reduce(function (res, number) {
//   return res + number
// }, 0)
// console.log(sumNum)

// // 2
// const sumNum = numbers.reduce((res, number) => {
//   return res + number
// }, 0)
// console.log(sumNum)

// 3
const sumNum = numbers.reduce((res, number) => res + number, 0)
console.log(sumNum)

// 평균
const avgNum = numbers.reduce((res, number) => res + number, 0) / numbers.length
console.log(avgNum)