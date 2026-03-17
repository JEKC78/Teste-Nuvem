//Exercícios com a Lógica, arrays e Objetos
//Orçamento de Projetos
const prompt = require('prompt-sync')()
let emp = prompt("DIGITE O NOME DA EMPRESA: ")
let cli = prompt("DIGITE O NOME DO CLIENTE: ")
let valor = parseFloat(prompt("DIGITE O VALOR: "))
let filaProjetos = ['Cliente', 'valorEstimado' ]
let projetos = prompt( "O PROJETO POSSUI PRAZO DE ENTREGA URGENTE? (sim /não)")
if (projetos == "sim" && valor > 3000){
console.log ("valorEstimado: " +(valor * .15))
}
else (filaProjetos[1])