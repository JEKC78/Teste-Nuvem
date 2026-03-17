const prompt = require ("prompt-sync")()
let Nome = prompt ('O nome do usuario é')
let Idade = parseInt(prompt("Sua idade é"))
let Aniversario = false
let anoAtual = 2026
let resultado = (anoAtual-Idade)-1
console.log('Ano de nascimento:',resultado)
if (Aniversario){
    console.log ("Ele já fez aniversario")}
    else {
    console.log ('Ele não fez aniversario')
}





