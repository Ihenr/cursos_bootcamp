// objeto persona 
const  persona = {
    nombre: "Henry",
    edad: 24, 
    isDebeloper: true, 
    saludo: function() {
        console.log("Hola")
    }
}

// console.log(persona)
persona.saludo();

///////////////
const otra_persona ={
    nombre: "Juan",
    edad: 34,
    isDebeloper: false,
    saludo: function(){
        console.log("Hola")
    }
}
otra_persona.saludo()
///////////////////////////////////
// Función factory
const creaPersona = (nombre, edad, isDebeloper) => {
    return {
        nombre,   /// nombre:nombre
        edad, 
        isDebeloper,
        saludo: function(){
            console.log("Hola")
        }
    }
}

const persona1 = creaPersona("Pedro", 23, true);
console.log(persona1)