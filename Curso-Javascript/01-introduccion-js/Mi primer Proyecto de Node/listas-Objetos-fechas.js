//listas, array o arreglos
const lista = [1, "hola", true, undefined, null ];
const lista2 = new Array(2, "hola", true, undefined, null );

const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento, index 0";

const lista4 = [lista, lista2, lista3]


console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);


//Objetos 
const movil ={
    altura: 10,
    anchura: 5, 
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["henry","javier", "Raúl"],
    tarjeta:{
        marca: "Sandisk",
        almacenamiento: 128
    },
    "altura-tarjet": 4
}

movil.anio = 2022;
movil.marca ="Samsung";

console.log(movil.contactos);
console.log(movil.tarjeta.almacenamiento);

console.log(movil.marca);


//Fechas
// Librerías de apoyo Moment.js 

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // utilizando los milisegundos 
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2022");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0 , 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anio = ahora.getFullYear();
console.log("-",dia,"-", mes,"-", anio);






