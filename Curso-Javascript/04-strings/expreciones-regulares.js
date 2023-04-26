//metodos de cadenas de caracteres parte 3
//https://regexr.com

let texto_largo = "Siempre hemos encontrado La manera de volver a encontrarnos Y nuestro amor ha crecido Más fuerte cada día  Eres mi hogar, mi refugio Mi roca en la tempestad Y juntos encontraremos la manera de superar Cualquier cosa que venga nuestro camino.";
//buscar todas las palabras que estan en el texto
console.log(texto_largo.match(/en/g))

//ver si existe la palabra en el texto.
console.log(texto_largo.includes("refugio"))

//saber si un texto empieza con una palabra 
console.log(texto_largo.startsWith("Siempre"))

//saber si un texto termina con una palabra 
console.log(texto_largo.endsWith("camino."))