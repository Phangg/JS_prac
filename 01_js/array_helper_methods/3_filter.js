const products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'carrot', type: 'vegetable' },
  { name: 'apple', type: 'fruit' },
]

// // 1
// const fruitFilter = function (product) {
//   return product.type === 'fruit'
// }
// const newArr = products.filter(fruitFilter)
// console.log(newArr)

// // 2
// const newArr = products.filter(function (product) {
//   return product.type === 'fruit'
// })
// console.log(newArr)

// // 3
// const newArr = products.filter((product) => {
//   return product.type === 'fruit'
// })
// console.log(newArr)

// 4
const newArr = products.filter((product) => product.type === 'fruit')
console.log(newArr)