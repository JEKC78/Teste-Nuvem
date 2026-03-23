const prompt = require("prompt-sync")()

let num = parseInt(prompt('Digite um numero'))

if (num == 0){console.log('Apesar de ser par, você digitou o numero 0')}  
if (num % 2 == 0){console.log ('Esse numero é par')} 
else{console.log ('Esse numero é ímpar')}  
fdzbgad