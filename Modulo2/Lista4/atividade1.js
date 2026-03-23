//Exercícios: Estruturas de Repetição
//1. Autenticação de Cofre Digital
const prompt = require('prompt-sync')();

let senhaCorreta = "9876";
let tentativa = "";

while (tentativa !== senhaCorreta) {
    tentativa = prompt("Digite a senha: ");

    if (tentativa !== senhaCorreta) {
        console.log("Acesso negado: Senha incorreta");
    }
}

console.log("Cofre liberado com sucesso");