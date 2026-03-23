//Exercícios com a Lógica, arrays e Objetos
//Sistema de Lanchonete de Fast Food
const prompt = require('prompt-sync')()

let cliente = prompt("Digite o nome do cliente: ")
let valorBase = 30.00
let quantidade = parseInt(prompt("Digite a quantidade de lanches: "))
let extras = []
let extra1 = prompt("Digite o nome do primeiro ingrediente extra: ")
let valorExtra1 = parseFloat(prompt(`Digite o valor de ${extra1}: `))
extras.push(extra1)
let extra2 = prompt("Digite o nome do segundo ingrediente extra: ")
let valorExtra2 = parseFloat(prompt(`Digite o valor de ${extra2}: `))
extras.push(extra2)
let subtotal = (valorBase + valorExtra1 + valorExtra2) * quantidade
let desconto = 0
if (extras[0] && extras[1] && quantidade > 2) {
    desconto = subtotal * 0.20
}

let total = subtotal - desconto

// Exibindo resultado
console.log("\nResumo do pedido:")
console.log("Cliente:", cliente)
console.log("Lanches:", quantidade)
console.log("Ingredientes Extras:", extras)
console.log("Subtotal: R$", subtotal.toFixed(2))
if (desconto > 0) console.log("Desconto aplicado: R$", desconto)
console.log("Valor total: R$", total)