//Trabajando con Objetos 
const obj = {
    id: 4,
    nombre: "Henry",
    apellido: "Morocho",
    isDeveloper: true,
    libros_favoritos: ["El metodo","El codigo"],
    "4-juegos":[1, 2, 3, 4]
}

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Iñigo"
console.log(obj2.nombre)
console.log(obj.nombre)

let val1 = 4
let val2 = val1

val2 = 6
console.log(val1)
console.log(val2)

//////////////

const obj3 = { ...obj }

console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Gorka"

console.log(obj.nombre)
console.log(obj3.nombre)

/////////////
// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    { titulo: "Lo que el viento se llevó", anyo: 1939 },
    { titulo: "Titanic", anyo: 1997 },
    { titulo: "Moana", anyo: 2016 },
    { titulo: "El efecto mariposa", anyo: 2004 },
    { titulo: "Ted", anyo: 2012 }
]

console.log(listaPeliculas)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a, b) => a.anyo - b.anyo)

console.log(listaPeliculas)

// listaPeliculas.sort((a, b) => (a.titulo > b.titulo) ? 1 : (a.titulo < b.titulo) ? -1 : 0);
// console.log(listaPeliculas);

listaPeliculas.sort((a, b) => a.titulo.localeCompare(b.titulo));
console.log(listaPeliculas);