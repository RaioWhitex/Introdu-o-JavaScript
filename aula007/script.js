/*Quando clicar no botão ativar fundo da tela fica escuro e as letras brancas
Quando clicar no botao ativar o texto muda para desativar
quando clicar no botao desativar o fundo da tela muda para letras PermissionStatus.apply*/


let botaotrocatema = document.querySelector("#botaotrocatema")
let body = document.querySelector("body")

function trocatema() {
    body.classList.toggle("dark-mode")

    if(botaotrocatema.textContent == "Ativar") {
        botaotrocatema.textContent = "Desativar"
    }else {
        botaotrocatema.textContent = "Ativar"
    }
}
botaotrocatema.addEventListener("click", trocatema)