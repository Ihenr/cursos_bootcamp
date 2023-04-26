const hTexto = document.getElementById("h-texto")

console.log(hTexto)

hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)
    hTexto.innerHTML = evento.detail.texto //cambia el texto del html
    hTexto.style.color = evento.detail.color
})

function cambioTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color // color:color
        }
    })
    hTexto.dispatchEvent(evento)
}
// cambioTexto("Soy el nuevo texto", "Green")
// funcion para poner en consola