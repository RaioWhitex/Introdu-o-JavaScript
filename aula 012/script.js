let frutas = ["uva", "morango", "laranja"]

/* Método push adiciona item ao final da lista */
frutas.push ("banana")
console.log(frutas)

/* Remove o último item da lista */
frutas.pop()
console.log(frutas)

/* Remove o primeiro item da lista */
frutas.shift()
console.log(frutas)

/* Adicona no inicio da lista */
frutas.unshift("abacate")
console.log(frutas)

/* Mostra quantidade de elementos */
console.log(frutas.length)

/* Verifica se um valor existe na lista */
console.log(frutas.includes("abacate"))