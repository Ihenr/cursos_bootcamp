var variable;
let variablelet_;

// const constante; se matiene el valor y no varia 
const constante = "Hola soy una costante";
console.log(constante);
// constante= "adios" // Nos da un error
// Una Variable que varia el valor  y afecta a todo el codigo 
var a=1;
console.log(a);

a = 4;
console.log(a);

// let::::// Una Variable que varia el valor  y afecta al bloque donde se esta declarando. 
let b = 3;
console.log(b);

b=5;
console.log(b);

// var
var variable ="Hola soy una variable VAR";

for(var i=0; i<3 ;i++){
    var variable ="soy la segunda variable";
}

console.log(variable);
// let
let variablelef ="Hola soy una variable VAR";

for(var i=0; i<3 ;i++){
    let variablelet ="soy la segunda variable";
}

console.log(variablelef);

// ---------------------------------
var num = 4;

console.log(typeof num);

num = "hola soy num";

console.log(typeof num);