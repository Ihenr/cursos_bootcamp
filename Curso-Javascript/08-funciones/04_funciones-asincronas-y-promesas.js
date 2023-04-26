//Funciones asíncronas
function miAsinc(){
    //hace una llamada a una base de datos externa
    //puede dar algún error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2);
    //si esta todo correcto
    if(i) {
        resolve();
    }else {
        reject();
    }
});

miPromesa 
    .then(() => console.log("Se a ejecutado de forma correcta"))
    .catch(() => console.log("Error"))
    .finally(() =>console.log("Yo me ejecuto siempre"))



    