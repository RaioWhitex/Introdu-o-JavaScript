let botaomudatexto = document.querySelector("#btnmudatexto")
let titulo = document.querySelector ("#titulo")

function mudatexto() {
    titulo.innerHTML = "Bigas"

}
botaomudatexto.addEventListener("click", mudatexto)