let dinheiro = 5000
alert (dinheiro.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}))