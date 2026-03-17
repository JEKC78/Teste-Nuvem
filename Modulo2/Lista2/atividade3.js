//Exercícios com a Lógica, arrays e Objetos
//FICHA MÉDICA VETERINÁRIA
const prompt = require('prompt-sync')()
let ficha = prompt("DIGITE O NOME DE SEU CACHORRO: ")
let raca = prompt("DIGITE A RAÇA DE SEU CACHORRO: ")
let idade = prompt("DIGITE A IDADE DO SEU CACHORRO: ")
paciente = ['nome', 'raça', 'idade']
//ficha.push(nome)
if (idade >= 8){
    console.log ("O PACIENTE", ficha, "DE RAÇA" , raca,"JÁ É SENIOR E PRECISA DE EXAMES DE ROTINA:  ")
    }
    else {
        console.log ("PACIENTE" , ficha, "DE RAÇA" , raca, "ESTÁ NA FAIXA DE IDADE REGULAR.")
    }