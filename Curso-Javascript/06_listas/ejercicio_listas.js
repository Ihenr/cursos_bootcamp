// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Arroz", "Huevos", "Limones","Manzanas","Peras"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop()

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {
        titulo: "Black Adam",
        director: "Jaume Collet",
        fecha: new Date(2022, 10, 29)
    },
    {
        titulo: "Spider-Man: No Way Home",
        director: "Jon Watts",
        fecha: new Date(2021, 11, 16)
    },
    {
        titulo: "Avatar",
        director: "James Cameron",
        fecha: new Date(2009, 10, 29)
    }
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculaNueva = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(director => director.director)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(titulo => titulo.titulo)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const concatenar = directores.concat(titulos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const propagacion = [...directores, ...titulos];






console.log(propagacion);
