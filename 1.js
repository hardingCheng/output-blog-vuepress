let sym = Symbol('unique')
let bol = Symbol('distinct')
let one = Symbol('only-one')
let obj = { property: "regular property",[sym]:1,[bol]:2 }
obj[one] = 3

for(let prop in obj) {
    console.log(prop + ": " + obj[prop])
}
console.log(Object.entries(obj))
console.log(JSON.stringify(obj))

console.log(Object.getOwnPropertySymbols(obj))
