//Exercícios com a Lógica Inicial
// CALCULO DE FRETE LOGISTICO
const prompt = require ("prompt-sync")()
let taxaI = 20
let km = parseFloat(prompt("INFORME A DISTÂNCIA EM KM ATÉ O CLIENTE:"  ))
let Erisco = prompt("A ENTREGA É CONSIDERADA DE RISCO OU URGENTE? (SIM/ NÃO):  ")
if (Erisco == "sim" || km>= 100){
    taxaI+=15
    }
let kmA = 1.50
let final = km * kmA
if (km>100 || Erisco=="sim"){
 console.log ("TAXA ADICIONADA", final + taxaI )   
}
else {
    console.log ("SEM TAXA ADICIONAL",final + taxaI)
}
