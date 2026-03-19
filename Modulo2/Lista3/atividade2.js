//Exercícios com a Lógica, arrays e Objetos
//Tracker de Atletas Profissionais
const prompt = require('prompt-sync')()
let Atleta = {
    nome: 'PEDRO',
    peso: 80,
    meta: "Emagrecimento",
    distancias: [18, 22, 19],
    selos: []
}
let hoje = +prompt ("Digite a distância corrida hoje, em km: ")
Atleta.distancias.push(hoje)
let d = Atleta.distancias
let media = (d[1] + d[2] + d[3]) / 3
if (media > 20 && Atleta.meta === "Emagrecimento"){
Atleta.peso--
Atleta.selos.push("Meta Atingida")
}
else {
//if (Atleta.meta === "Performance" && hoje > d[2]) {
 Atleta.selos.push("Novo Record Pessoal")   
}
console.log(Atleta)