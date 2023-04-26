// Formas de importar/exportar módulos
// 1. CommonJS - require
// 2. Import ES6 - import

// const moduloMatematicas = require("./modulos/matematicas.js")
// const factorial = moduloMatematicas.factorial;
// const { factorial, suma } = moduloMatematicas;
// const suma = moduloMatematicas.suma;
// console.log(moduloMatematicas.suma)

const {suma, factorial} = require("./modulos/matematicas.js");

console.log(suma(10, 20));
console.log(factorial(5));

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)