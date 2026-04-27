/* Exercício 1: Formatação de Números para Moeda Real
Enunciado:
Peça ao usuário que digite um valor numérico. Em seguida, exiba esse valor
formatado como moeda brasileira (R$), incluindo o símbolo, a vírgula para
casas decimais e o ponto para separar as casas de milhar.
 */
/* let numero= Number (prompt("Digite um valor numerico: "))

alert(numero.toLocaleString('pt-BR', {
    style: "currency",
    currency: "BRL"
})) */
/* let botaoformatar = document.querySelector ("#botaoformatar")
let valorinput = document.querySelector ("#dinheiro")

function apresentarnumeroformatado() {
    let valorinput = Number (document.querySelector("#dinheiro").value)

    let conersao = valorinput;toLocaleString("pt-BR", { style: "currency", currency: "BRL"})
}

botaoformatar.addEventListener("click",apresentarnumeroformatado) */

/* Exercício 2: Converter Letras para Maiúsculas
Enunciado:
Peça ao usuário que digite uma frase ou palavra. Depois, exiba o texto com
todas as letras em maiúsculas. */

let nomeusuario = document.querySelector("#letras")
let botaoformatar = document.querySelector("#botaoformatar")

function formatarletras() {
    alert(``${nomeusuario.value;})
}

botaoformatar.addEventListener("click",formatarletras)