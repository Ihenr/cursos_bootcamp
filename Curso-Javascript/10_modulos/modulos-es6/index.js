// import { suma, eleva, nombre } from './modulos/matematicas.js'
import * as moduloMatematicas from './modulos/matematicas.js'
import getAutor, { libro } from './modulos/literatura.js'



console.log(moduloMatematicas.suma(3, 4))


const sum = moduloMatematicas.suma(4, 12)
console.log(sum);

const potencia = moduloMatematicas.elevado(2, 3);
console.log(potencia)

console.log(moduloMatematicas.nombre)

console.log(getAutor())
console.log(libro)