const miFuncion = val => {
    if(typeof val === "number"){
        return val * 2;
    }
    throw new Error("El valor debe ser de tipo numeroco");
}

// console.log(miFuncion("3"))

const numero = "e"
try {
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta");
    const doble = miFuncion(numero);
    console.log(doble);
} catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`);
    console.log("ERROR!");
} finally{
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno");
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
