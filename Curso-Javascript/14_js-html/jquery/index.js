//$(selector).acción()

// $("li").hide()

// se ejecuta una ves que ya este cargada la pagina 
// $(document).ready(() => {    })   o la funcion mas corta
$(() =>{
    // selectores:
    // id="el-1"       =>  "#el-1"
    // class="el-1"    =>  ".el-1"
    // $("#el-1").hide()

    $(".hide-btn").click(() => {
        // $("h1").hide()
        $("h1").fadeOut()

    })
    $(".show-btn").click(() => {
        // $("h1").show()
        $("h1").fadeIn()
    })

    $("li").dblclick(() => {
        $("h1").css({color: "Red"})
    })

    $(".new-element").click(() => {
        // $("ul").append("<li>New Element</li>") //agrega al final 
        $("ul").prepend("<li>New Element</li>")  //agrega al inicio
    })

    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })
    $("li").mouseleave(elem => {
        elem.target.style.color = "black"
    })

})
