//Exercícios com a Lógica Inicial
// SISTEMA DE COMISSÃO DE VENDAS
const prompt = require ("prompt-sync")()
let vendas = (prompt ("DIGITE O VALOR TOTAL DE VENDAS NO MÊS: R$ "))
if (vendas >= 20000) {
comissao = vendas * 0.05
console.log ("O VALOR SE SUA COMISSÃO É DE: R$" , + comissao)
} else {
comissao = vendas * 0.02
console.log ("O VALOR SE SUA COMISSÃO É DE: R$" , + comissao)
}