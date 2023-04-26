// Sentencias Switch

let nota =4;

switch(nota){
    case 5:
        console.log("Sobresaliente");
        break;
    case 4:
        console.log("MuyBueno");
        break;
    case 3:
        console.log("Bueno");
        break;
    case 2:
        console.log("Regular");
        break;
    case 1:
        console.log("Mal");
        break;
    case 0:
        console.log("Pesimo");
        break;
    default:
        console.log("Error, introduce una nota del 1 al 5");
        break;
}