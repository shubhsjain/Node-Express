// CommonJS, every file is a module (by default)
// Modules  - Encapsulated code (only share minimun)
const names = require('./4-names')
const sayHi = require('./5-utils')
// console.log(names)

sayHi('Sanvi')
sayHi(names.lucky)
sayHi(names.shubh)
