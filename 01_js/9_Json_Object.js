// JSON 변환

const jsonData = {
  coffee: 'Americano',
  iceCream: 'Mintchoco',
}

// Object -> json
const objToJson = JSON.stringify(jsonData)  
console.log(objToJson)                        // {"coffee":"Americano","iceCream":"Mintchoco"}
console.log(typeof objToJson)                 // string

// json -> Object
const jsonToObj = JSON.parse(objToJson)
console.log(jsonToObj)                        // { coffee: 'Americano', iceCream: 'Mintchoco' }
console.log(typeof jsonToObj)                 // object
console.log(jsonToObj.coffee)                 // Americano
