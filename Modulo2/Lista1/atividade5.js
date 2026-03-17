//Exercícios com a Lógica Inicial
// ANÁLISE DE RISCO DE CRÉDITO BANCÁRIO  

const prompt = require ("prompt-sync")()
let salario = prompt("DIGITE SEU SALÁRIO LIQUIDO:  ")
let parcelas = prompt ('DIGITE O VALOR DAS PARCELAS: ')
let credito = prompt ('VOCÊ POSSUI RESTRIÇÃO EM SEU NOME. ')
let condicao = salario * 0.30
if (credito == "nao" && parcelas<=condicao ){
console.log ("CRÉDITO APROVADO")
}
else {
    console.log ("CRÉDITO NEGADO: PARCELA ACIMA DO LIMITE OU RESTRIÇÃO NO CPF")
}