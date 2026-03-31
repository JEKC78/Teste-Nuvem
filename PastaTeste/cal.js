const prompt = require('prompt-sync')({sigint:true});

function contaAdicao(){
let a=Number(prompt("Digite o primeiro número: "));
let b=Number(prompt("Digite o segundo número: "));
let resultado=a+b;
console.log("Operação: Adição");
console.log("Valores:",a,"+",b);
console.log("Resultado:",resultado);
}

function contaSubtracao(){
let a=Number(prompt("Digite o primeiro número: "));
let b=Number(prompt("Digite o segundo número: "));
let resultado=a-b;
console.log("Operação: Subtração");
console.log("Valores:",a,"-",b);
console.log("Resultado:",resultado);
}

function contaMultiplicacao(){
let a=Number(prompt("Digite o primeiro número: "));
let b=Number(prompt("Digite o segundo número: "));
let resultado=a*b;
console.log("Operação: Multiplicação");
console.log("Valores:",a,"*",b);
console.log("Resultado:",resultado);
}

function contaDivisao(){
let a=Number(prompt("Digite o primeiro número: "));
let b=Number(prompt("Digite o segundo número: "));
if(b===0){console.log("Não pode dividir por zero!");return;}
let resultado=a/b;
console.log("Operação: Divisão");
console.log("Valores:",a,"/",b);
console.log("Resultado:",resultado);
}

function contaPorcentagem(){
let valor=Number(prompt("Digite o valor base: "));
let perc=Number(prompt("Digite a porcentagem: "));
let resultado=(valor*perc)/100;
console.log("Operação: Porcentagem");
console.log("Valores:",perc,"% de",valor);
console.log("Resultado:",resultado);
}

while(true){
console.log("\n---CALCULADORA---");
console.log("Selecione a operação desejada!");
console.log("1- Adição");
console.log("2- Subtração");
console.log("3- Divisão");
console.log("4- Multiplicação");
console.log("5- Porcentagem");
console.log("0- Sair");
let escolha=Number(prompt("Digite uma operação: "));
switch(escolha){
case 0:
console.log("Encerrando...");
break;
case 1:
contaAdicao();
break;
case 2:
contaSubtracao();
break;
case 3:
contaDivisao();
break;
case 4:
contaMultiplicacao();
break;
case 5:
contaPorcentagem();
break;
default:
console.log("Opção inválida!");
}
if(escolha===0) break;
}