// Funcion para la suma 
export function suma(a, b) {
    return a + b;
}
// Funcion para multiplicacio
export function multiplicacion(a, b) {
    return a * b;
}
// funcion elevado a un numero 
export function elevado(a, b) {
    return a ** b;
}
// Funcion para el factorial de un numero 
export function factorial(a) {
    factorial = 1;
    for(let i = 1; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}

export const nombre = "Matematicas"

