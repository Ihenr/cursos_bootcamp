//Bucle for 

// i = i + 1
// i += 1
// i++

for(let i =0 ; i<10; i++){
    console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800 ];

for(let i = 0; i< lista.length; i++){
    console.log(lista[i])
}
// estructura for...of 
for(let valor of lista){
    console.log(valor)
}

//estructura forEach 

lista.forEach(valor =>{
    console.log(valor);
});

//Estructura for....in
let persona ={
    nombre: "henry",
    apellido: "Morocho",
    edad: 24,
    isDeveloper: true
};

console.log(persona.nombre)

let prop = "edad";
console.log(persona[prop])

for(let propiedad in persona){
    console.log(propiedad);

    console.log(persona[propiedad]);
}
