// console.log('hello, JavaScript ');


// // 함수 선언식
// function add(num1, num2) {
//   return num1 + num2
// }
// console.log(add(2, 7))


// // 함수 표현식
// const sub = function (num1, num2) {
//   return num1 - num2
// }
// console.log(sub(2, 7))


// // 기본 인자
// const greeting = function (name = 'Anonymous') {
//   return `Hi ${name}`
// }
// console.log(greeting())


// // 화살표 함수
// const greeting = name => `Hi ${name}`
// console.log(greeting())


// // 즉시 실행 함수
// console.log((function(num) { return num ** 3 })(2))
// console.log((num => num ** 3)(2))


// Array 
const numbers = [1, 2, 3, 4, 5]
console.log(numbers[0])
console.log(numbers[-1])
console.log(numbers.length)
console.log(numbers[numbers.length - 1])

numbers.reverse()
console.log(numbers)

numbers.push(100)
console.log(numbers)

numbers.pop()
console.log(numbers)

console.log(numbers.includes(1))
console.log(numbers.includes(100))

console.log(numbers.indexOf(3))
console.log(numbers.indexOf(100))

console.log(numbers.join())
console.log(numbers.join(''))
console.log(numbers.join(' '))
console.log(numbers.join('-'))