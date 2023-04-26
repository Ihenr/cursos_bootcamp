// sets o conjuntos (en castellano)
// sets funciona para que no exista valores repetidos 

const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", {id: 5}, "hola"];

const miSet = new Set(array);

console.log(array);
console.log(miSet)

// .add()   -----agregar valores 
miSet.add(9);
console.log(miSet);
miSet.add(4);
console.log(miSet);

// .delete() ----eliminar valores
miSet.delete("hola");
console.log(miSet);

// .clear()   ----eliminar todo los valores
// miSet.clear(miSet);
// console.log(miSet);

// .has()  ----ver si tiene un valor 
// console.log(array.includes(2));
console.log(miSet.has(40))

//.size   --- cuantos valores unicos tiene el array 
console.log("valor unicos ",miSet.size);

miSet.forEach(valor => {
    console.log(valor)
});

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [...miSet];
console.log(ar_miSet);