//Exercícios com a Lógica Inicial
// ALERTA DE REPOSIÇÃO DE ESTOQUE
const prompt = require ("prompt-sync")()
let Ereal = parseFloat(prompt("QUANTIDADE ATUAL DE PLACA:  "))
let Esegu = parseFloat(prompt("QUANTIDADE MINIMA DE PLACAS:  "))
let min = 35
let estoque = (Esegu - Ereal)
if (Ereal >= min){
console.log ("ESTOQUE REGULARIZADO")
}
else [
console.log ("ALERTA: ESTOQUE BAIXO! NECESSARIO SOLICITAR A COMPRA COM URGÊNCIA DE",   estoque ,"UNIDADES")
]