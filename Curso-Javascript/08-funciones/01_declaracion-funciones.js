// Qué son las funciones, cómo se declaran y cómo se utilizan
let nom = "Henry";

saludar(nom)
function saludar(nombre){
    console.log(`Hola soy ${nombre}`)
}


////

let nombre_2 = "Juan"
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adiós ${nombre}`)
}

//////

let persona = {nombre:"Henry", apellido:"Morocho"};
console.log(persona);

saludarpersona(persona)

console.log(persona)


function saludarpersona(objeto){
    objeto.apellido = "Guaman"
    console.log(`Hola soy ${objeto.nombre} ${objeto.apellido}`)
}

///parametro por defecto 

function imprimirNumero(num = 7){
    console.log(num);
}

imprimirNumero();
///factor de propagacion 

function imprimir(...parametros){
    console.log(parametros);
}

imprimir(1, 2, 3, "hola", {id: 1}, null )

//suma de numeros 

function suma(...num){
    return num.reduce((a, b) => a + b);
}

const s = suma(1, 2, 3, 4);

console.log(s)

///multiplicar 
let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adiós"
    console.log(variable_interna)
    return a * b
}


console.log(multiplicar(4, 9))