let btnSoma = document.querySelector("#btnSoma")
let primeiroInput = document.querySelector("#primeironumero")
let segundoInput = document.querySelector("#segundonumero")
let resultado = document.querySelector("#resultado")

function soma () {
    let resultado = Number (primeiroInput.value) + Number(segundoInput.value)
    
    apresentaresultado.innerHTML = `Resultado: ${resultado}`
}

btnSoma.addEventListener("click", soma)