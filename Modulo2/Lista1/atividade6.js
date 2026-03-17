//Exercícios com a Lógica Inicial
// GESTÃO DE PONTO E HORAS EXTRAS
const prompt = require ("prompt-sync")()
let ganho = prompt("DIGITE O VALOR QUE VOCÊ GANHA POR HORA NORMAL:  ")
let extra = prompt("DIGITE A QUANTIDADE DE HORAS EXTRAS:  ")
let ganhoextra = (ganho * 1.5)
console.log ("O VALOR A -RECEBER DE HORAS EXTRAS ESTE MÊS É: R$",ganhoextra * extra)