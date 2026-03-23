//Exercícios: Estruturas de Repetição
//2. Calibração de Sensores Industriais

const prompt = require('prompt-sync')();
let temperatura = Number(prompt("Digite a temperatura inicial: "));
for (let i = 1; i <= 5; i++) {
    console.log("Leitura " + i + ": " + temperatura + " graus");
    temperatura = temperatura + 2; 
}
