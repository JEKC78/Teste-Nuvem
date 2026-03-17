//Exercícios com a Lógica Inicial
//RENDIMENTOS DE FUNDOS IMOBILIARIOS

const prompt = require ("prompt-sync")()
let cota = prompt("QUAL A QUANTIDADE DE COTAS QUE VOCÊ POSSUI? :  ")
let dividendo = prompt("QUAL O VALOR DO DIVIDENDO QUE VOCÊ RECEBEU:  ")
let resultado = (cota * dividendo)
if (resultado>=100){
    console.log ("VOCÊ JÁ TEM SALDO SUFICIENTE PARA COMPRAR UMA NOVA COTA E REINVESTIR!")
}
else {
    console.log ("RENDIMENTO RECEBIDO : R$ "+ resultado + " ACUMULE MAIS, PARA PODER REINVESTIR")
}