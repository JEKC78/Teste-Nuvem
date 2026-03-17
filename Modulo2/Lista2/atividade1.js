//Exercícios com a Lógica, arrays e Objetos
//LISTA DE PRESENÇA
const prompt = require ("prompt-sync")()
let listaAlunos = ['ELOI', 'PEDRO']
let nome = prompt("DIGITE O NOME DO ALUNO: ")
if (listaAlunos.length >= 2){
    listaAlunos.push(nome)
console.log ("TURMA FORMADA COM SUCESSO! ALUNOS:",[listaAlunos])
}


