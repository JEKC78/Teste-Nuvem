//Exercícios com a Lógica, arrays e Objetos
//Sistema de Segurança de Voo / Aeronave Doméstica
const prompt = require('prompt-sync')()

let nome = prompt("Digite o nome do passageiro: ")
let nacionalidade = prompt("Digite a nacionalidade: ")
let trabalho = prompt("Está a trabalho? (sim/nao): ").toLowerCase() === "sim"

let documentos = ["Passaporte", "Visto"]

let doc3 = prompt("Digite o terceiro documento (CPF): ")
documentos[2] = doc3

let entradaPermitida = false

// Regra de validação
if (nacionalidade !== "Brasil") {
    if (documentos[1] === "Visto" && documentos[2] !== "") {
        entradaPermitida = true
    }
} else {
    if (documentos[0] === "Passaporte") {
        entradaPermitida = true
    }
}

// Convertendo para "Sim" ou "Não" na saída
let trabalhoTexto = trabalho ? "Sim" : "Não"
let entradaTexto = entradaPermitida ? "Sim" : "Não"

let passageiro = {
    nome: nome,
    nacionalidade: nacionalidade,
    trabalho: trabalhoTexto,
    documentos: documentos,
    entradaPermitida: entradaTexto
}

// Exibindo ficha
console.log("Ficha do passageiro:")
console.log(passageiro)