//Exercícios com a Lógica Inicial
//MULTA POR ATRASO NO CONDOMÍNIO
const prompt = require ("prompt-sync")()
let valorOriginal = parseFloat(prompt("INFORME O VALOR ORIGINAL DO CONDOMINIO:R$ "))
let diasAtraso = parseInt(prompt("INFORME A QUANTIDADE DE DIAS DE ATRASO:"))
let feriado = prompt("O VENCIMENTO ORIGINAL CAIU EM UM FERIADO OU FINAL DE SEMANA? (sim/nao) ")
let multa = valorOriginal * 0.02
let juros = diasAtraso * 1
if (diasAtraso > 0 && (feriado === "nao")) {
console.log ("VALOR ATUALIZADO DO BOLETO: R$", valorOriginal + multa + juros)
} else {
console.log ("VALOR ATUALIZADO DO BOLETO: R$ ", valorOriginal + juros)}