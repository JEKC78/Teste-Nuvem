//Exercícios: Estruturas de Repetição
//2. Calibração de Sensores Industriais
const prompt = require('prompt-sync')();
let total = 0;
let resposta;
do {
    let valor = Number(prompt("Digite o valor do item: "));
    total = total + valor;
    resposta = prompt("Deseja adicionar mais algum item? (sim/nao): ");
} while (resposta === "sim");

console.log("Total a pagar: R$ " + total);