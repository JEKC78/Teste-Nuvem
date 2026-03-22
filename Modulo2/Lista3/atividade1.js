//Exercícios com a Lógica, arrays e Objetos
//Carrinho de Compras de E-commerce
const prompt = require('prompt-sync')()
let nomeCliente = prompt("Digite o nome do cliente: ")
let tipoAssinatura = prompt("Digite o tipo de assinatura (Prime/ Padrão):")
let p1 = parseFloat(prompt("Digite o preço do produto 1: "))
let p2 = parseFloat(prompt("Digite o preço do produto 2: "))
let p3 = parseFloat(prompt("Digite o preço do produto 3: "))
let total = p1 + p2 + p3
let freteGratis = false
if (total > 200 || tipoAssinatura === "Prime") {
    freteGratis = true
} else {
    total += 30
}
console.log ("Cliente:", nomeCliente)
console.log ("Assinatura:", tipoAssinatura)
console.log ("Produto 1:", p1)
console.log ("Produto 2:", p2)
console.log ("Produto 3:", p3)
console.log ("Frete grátis:", freteGratis ? "Sim" : "Não")
console.log ("Total a pagar: R$ " + total)