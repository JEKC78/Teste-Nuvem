//Exercícios com a Lógica, arrays e Objetos
//Controle de Imigração Governamental
const prompt = require('prompt-sync')()
let passageiro = {
    nome: "José Eloi",
    nacionalidade: "Br",
    trabalho: true,
    documentos: ["Passaporte", "Visto"]
  }
  let terceiroDocumento = prompt("Informe o terceiro documento): ")
    passageiro.documentos.push(terceiroDocumento)
    if (passageiro.nacionalidade !== "Brasil" ) {
   if (passageiro.documentos[1] =="Visto" && passageiro.documentos[2]== "CPF"){
           passageiro.entradaPermitida = 'sim'}
   else {   passageiro.entradaPermitida = 'nao'

   }       
  } else {
    passageiro.entradaPermitida = 'sim'
    
  }
  console.log(passageiro);