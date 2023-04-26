// Funcion para la suma 
function suma(a, b) {
    return a + b;
}
// Funcion para multiplicacio
function multiplicacion(a, b) {
    return a * b;
}
// funcion elevado a un numero 
function elevado(a, b) {
    return a ** b;
}
// Funcion para el factorial de un numero 
function factorial(a) {
    factorial = 1;
    for(let i = 1; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}

module.exports = {
    suma,
    multiplicacion, 
    elevado,
    factorial
}