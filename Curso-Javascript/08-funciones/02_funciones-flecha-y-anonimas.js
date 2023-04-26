////Funciones de tipo flecha y anónimas 

const array = [ 1, 2, 4 , 5 , 7 , 12, 23];

// const array2 = array.map(function(valor) {
//     return valor * 2;
// });


const array2 = array.map((valor) => valor * 2)//funcion anónima
console.log(array2)

/// definir funciones tipo flecha ----const 

// const dobleValor = valor => { 
//     return valor * 2;
// }

const dobleValor = valor => valor*2; //funcion tipo flecha

console.log(dobleValor(6))  //primero se inicializa el valor

console.log(doble(4))

const array3 = array.map(dobleValor)
console.log(array3)

function doble(valor){
    return valor * 2;
}
