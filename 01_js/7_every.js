const arr = [1, 2, 3, 4, 5]

// // 1
// const res = arr.every(function (elem) {
//   return elem % 2 === 0
// })
// console.log(res)

// 2
const res = arr.every((elem) => elem % 2 === 0)
console.log(res)