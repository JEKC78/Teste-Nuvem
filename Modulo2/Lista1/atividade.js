//Exercícios com a Lógica Inicial
////////////MARGEM DE LUCRO
const prompt = require ("prompt-sync")()
let venda=parseInt(prompt("QUAL O VALOR DE VENDA:"))
let custo=parseInt(prompt("QUAL O CUSTO DE PRODUÇÃO:"))
const lucro = venda-custo
if (lucro>=500){
    console.log ("MARGEM DE LUCRO SAUDAVEL: R$ "  +lucro)
}  
    else {
  console.log ("ATENÇÃO, MARGEM DE LUCRO PERIGOSAMENTE BAIXA")      
    }

