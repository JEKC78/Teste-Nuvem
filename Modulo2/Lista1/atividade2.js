//Exercícios com a Lógica Inicial
/////ORÇAMENTO DE PROJETOS

const prompt = require ("prompt-sync")()
let venda = parseInt(prompt("QUANTIDADE DE HORAS ESTIMADA:  "))
let resultado = (venda*45)
const desconto = (0.10)
var pergunta = prompt("O CLIENTE É UMA ONG?:  ")
if (pergunta == "sim"&& (resultado>=5000)){
    console.log ('CLIENTE COM DIREITO Á 10% DE DESCONTO  :  R$' + resultado * desconto)
    }
    else {
        console.log ('NÃO HÁ DESCONTO')
    }