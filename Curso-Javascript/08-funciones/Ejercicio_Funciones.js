function parametroDevuelve(){
    return true;
}

async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}


function* indices(){
    let i = 0;
    while(true){
        yield i += 2;
    }
}

const ind = indices();

console.log(ind.next())
damePromesa();
