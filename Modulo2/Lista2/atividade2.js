//Exercícios com a Lógica, arrays e Objetos
//BAIXA NO ESTOQUE
const prompt = require ("prompt-sync")()
let estoquetamanhos = [8,44,36]
let vendidas = parseInt(prompt ('INFORME QUANTAS CAMISETAS P, FORAM VENDIDAS: '))
estoquetamanhos[0] = estoquetamanhos[0] - vendidas
if (estoquetamanhos[0] < 5){
    console.log ("ALERTA O ESTOQUE DE CAMISETAS TAMANHO P, ESTÁ CRÍTICO!")
}
else {
    console.log ("ESTOQUE ATUALIZADO. ESTOQUE RESTANTE DO TAMANHO P;", estoquetamanhos[0])
}