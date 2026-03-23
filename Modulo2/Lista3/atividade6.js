//Exercícios com a Lógica, arrays e Objetos
//Sistema de Segurança de Voo / Aeronave Doméstica
const prompt = require('prompt-sync')()
let turbina = {
    lado: "Motor Esquerdo",
    status: "Desligado",
    leituras: [0, 0, 0] // [temperatura, pressão, combustível]
}
let temp = parseFloat(prompt("Digite a temperatura (°C): "))
let pressao = parseFloat(prompt("Digite a pressão do óleo (PSI): "))
let combustivel = parseFloat(prompt("Digite o nível de combustível (%): "))
turbina.leituras[0] = temp
turbina.leituras[1] = pressao
turbina.leituras[2] = combustivel
if (combustivel > 20 && pressao > 50 && temp >= 20 && temp <= 90) {
    turbina.status = "Ligado"
} else {
    turbina.status = "Falha Crítica"
    turbina.bloqueioAtivado = true
}
console.log("Painel da turbina:")
console.log("Lado:", turbina.lado)
console.log("Status:", turbina.status)
console.log("Leituras:", turbina.leituras)
if (turbina.bloqueioAtivado) {
    console.log("Bloqueio ativado:", turbina.bloqueioAtivado)
}