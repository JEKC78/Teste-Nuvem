//Exercícios com a Lógica, arrays e Objetos
//Sistema de Mentoria Acadêmica

const prompt = require('prompt-sync')()

let coordenador = prompt("Digite o nome do coordenador: ")
let limite = parseInt(prompt("Digite o limite máximo de vagas: "))
let area = prompt("Digite a área de estudo do projeto: ")
let mentores = [
    { nome: "Ana", areaDeAtuacao: "Tecnologia" },
    { nome: "Carlos", areaDeAtuacao: "Tecnologia" }
]
let novoNome = prompt("Digite o nome do novo voluntário: ")
let novaArea = prompt("Digite a área de atuação do voluntário: ")
let status = "Ativo"
if (limite > 2 && novaArea === area) {
    mentores.push({ nome: novoNome, areaDeAtuacao: novaArea })
} else {
    status = "Bloqueado para Inscrições"
}
console.log("Ficha do projeto:")
console.log("Coordenador:", coordenador)
console.log("Limite de vagas:", limite)
console.log("Área de estudo:", area)
console.log("Mentores:", mentores)
console.log("Status:", status)