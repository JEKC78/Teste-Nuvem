//Exercícios com a Lógica, arrays e Objetos
//Tracker de Atletas Profissionais
const prompt = require('prompt-sync')()
let nome = prompt("Digite o nome do atleta: ")
let peso = parseFloat(prompt("Digite o peso atual do atleta (kg): "))
let meta = prompt('Digite a meta ("Emagrecimento" ou "Performance"): ')
let d1 = parseFloat(prompt("Digite a distância da maratona 1 (km): "))
let d2 = parseFloat(prompt("Digite a distância da maratona 2 (km): "))
let d3 = parseFloat(prompt("Digite a distância da maratona 3 (km): "))
let hoje = parseFloat(prompt("Digite a distância corrida hoje (km): "))
let distancias = [d2, d3, hoje]
let media = (distancias[0] + distancias[1] + distancias[2]) / 3
let selo = ""
if (media > 20) {
    if (meta === "Emagrecimento") {
        peso -= 1
        selo = "Meta Atingida";
    } else if (meta === "Performance" && hoje > distancias[1]) {
        selo = "Novo Recorde Pessoal"
    }
}
console.log("Perfil do atleta atualizado:")
console.log("Nome:", nome)
console.log("Peso atual:", peso)
console.log("Meta:", meta)
console.log("Distâncias (últimas 3 corridas):", distancias)
if (selo !== "") {
    console.log("Selo:", selo)
}
console.log("Média das distâncias:", media)