const myInfo = {
  name: 'jack',
  phonenumber: '123456',
  'samsung product': {
    buds: 'buds pro',
    galaxy: 'S99',
  },
}

console.log(myInfo.name)
console.log(myInfo['name'])

console.log(myInfo['samsung product'])
console.log(myInfo['samsung product'].galaxy)


console.log()
// ------------------------------------------------------------------------

const obj = {
  name: 'jack',
  greeting() {
    console.log('hi!')
  }
}

obj.greeting()
console.log(obj.name)


console.log()
// ------------------------------------------------------------------------

const key = 'xxx'
const value = ['한국', '미국', '일본', '중국']

const myObj ={
  [key]: value,
}

console.log(myObj)
console.log(myObj.xxx)


console.log()
// ------------------------------------------------------------------------
