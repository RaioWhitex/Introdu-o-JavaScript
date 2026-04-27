let idade= Number (prompt("Qual a sua idade? "))
let habilitado = prompt (`Você tem habilitação: 
1- Sim
2- Não
`)


if (habilitado == "1") {
    habilitado = true
} else {
    habilitado = false
}

if (idade >= 18 && habilitado == true) {
    alert ("Pode entrar!")
} else {
    alert ("Não pode entrar!")
}