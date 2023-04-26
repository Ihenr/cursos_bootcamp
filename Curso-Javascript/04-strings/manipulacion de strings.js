let nombre1 = "Iñigo"
let saludo = `Hola, ${nombre1} bienvenido`

console.log(saludo)

// Plantillas HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre1}</h1>
    <p>Este es un párrafo</p>
</html>
`;

console.log(plantilla)

//// Introducción de variables en html
let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"]
// Métodos de cadenas de textos 
let nombre = "Henry"

console.log("Hola, Mi nombre es ", nombre.toUpperCase())

let input = "Geminis";

let db = "geminis";


// para comparar sin que  diferencie mayusculas y minusculas o pasa de may a min
//-----tolLowerCase() ----toUpperCase()
//minusculas
console.log(input.toLowerCase());
//mayusculas
console.log(input.toUpperCase());

console.log(input.toLowerCase() === db.toLowerCase());

//Formas de concatenar dos cadenas de caracteres

let str_1 = "Hola soy la primera cadena";
let str_2 = "Hola soy la segunda cadena";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2 );
console.log(`${str_1} ${str_2}`);


///// eliminar espacios al inicio y al final de una cadena 

let str_3 = "  Hola soy el estring con estapcios.     "

console.log(str_3.length)
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

// obtener caractertes que hay en sierta posición
let str_4 = "Hola soy el estring con estapcios, y este es el nombre"
console.log(str_4.charAt(6));
console.log(str_4[6]);
console.log(str_4.substring(5,11));
console.log(str_4.substr(5,11));
//obtenr la posición de una palabra dentro de una cadena 

console.log(str_4.indexOf("el"));
console.log(str_4.lastIndexOf("el"))