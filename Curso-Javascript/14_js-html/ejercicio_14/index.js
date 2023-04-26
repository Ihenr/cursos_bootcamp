const boton = document.querySelector(".btn")
// evento de tipo "click" 
boton.addEventListener("click", () => {
    alert("click en el botón")
})
//evento click en el botón a través de jQuery
$(".btn").click(function(){
    console.log("Hola, estoy utilizando jQuery")
})