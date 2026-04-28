/* Introdução à objetos */

let aluno = {
    nome: "Gustavo",
    idade: 26,
    curso: "ADS",
    materiais: ["ui/ux design", "lógica de programação", "modelagem de banco de dadoos"],
    endereco: {
        cidade: "São Paulo",
        bairro: "Lapa",
        rua: "Honorato",
    }
}

aluno.idade = 27 /* Variando valor da propriedade */
aluno.status = true /* Adicionando uma nova propriedade */
delete aluno.idade /* Deletando propriedades */

console.log(aluno)
console.log(aluno["nome"])
console.log(aluno.idade)
console.log(aluno.curso)
console.log(aluno.materiais[1])
console.log(aluno.endereco.bairro)