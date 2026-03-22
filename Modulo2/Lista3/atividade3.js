//Exercícios com a Lógica, arrays e Objetos
//Programa de Milhas Aéreas
const prompt = require('prompt-sync')()
let fidelidade ={
    categoriaP: "Platinum",
    categoriaG: "Golden",
    nome: "Willian",
    historico: [
    voo1 = {
       destino:"Alemanha",
       milhas : 3000},
    voo2 = {
    destino : "Italia",
    milhas : 7500}
    ]
    
}
let terceirovoo = prompt ("Digite o destino do seu terceiro voo: ")     
let Tm = parseFloat (prompt ("Digite a quantidade de milhas acumuladas no terceiro voo: "))
let voo3 = {
    destino:terceirovoo,
    milhas:Tm,
    }
    fidelidade.historico.push (voo3)
let soma = (fidelidade.historico[0].milhas + fidelidade.historico[1].milhas + fidelidade.historico[2].milhas )

if (soma > 5000){
    console.log (soma - 5000,"Parabéns você é categoria: ",fidelidade.categoriaP)
}
 
else {
    console.log ("Parabéns você é categoria: ",fidelidade.categoriaG)    
    }
 //console.log (fidelidade) 
