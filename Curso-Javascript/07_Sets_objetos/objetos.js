const datos = {
    nombre: "Henry",
    apellido: "Morocho",
    edad: 24,
    altura: 170,
    eresDesarrollador: true
}

const miedad = datos.edad;

const datosAmigos =[
    {
        ...datos
    },
    {
        nombre: "Byron",
        apellido: "Sagñay",
        edad: 27,
        altura: 170,
        eresDesarrollador: false
    },
    {
        nombre: "Jonatan",
        apellido: "Morocho",
        edad: 22,
        altura: 169,
        eresDesarrollador: false
    }
]

const ordenada = datosAmigos.sort((a, b) => b.edad - a.edad)


console.log(datosAmigos)