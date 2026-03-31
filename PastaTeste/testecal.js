



const prompt=require('prompt-sync')();
let resultado=0;

function contaAdicao(){
let valor1=Number(prompt("Digite o primeiro número: "));
let valor2=Number(prompt("Digite o segundo número: "));
resultado=valor1+valor2;
console.log("Operação: Adição");
console.log("Valores:",valor1,"+",valor2);
console.log("Resultado:",resultado);
}

function contaSubtracao(){
let valor1=Number(prompt("Digite o primeiro número: "));
let valor2=Number(prompt("Digite o segundo número: "));
resultado=valor1-valor2;
console.log("Operação: Subtração");
console.log("Valores:",valor1,"-",valor2);
console.log("Resultado:",resultado);
}

function contaMultiplicacao(){
let valor1=Number(prompt("Digite o primeiro número: "));
let valor2=Number(prompt("Digite o segundo número: "));
resultado=valor1*valor2;
console.log("Operação: Multiplicação");
console.log("Valores:",valor1,"*",valor2);
console.log("Resultado:",resultado);
}

function contaDivisao(){
let valor1=Number(prompt("Digite o primeiro número: "));
let valor2=Number(prompt("Digite o segundo número: "));
if(valor2===0){console.log("Não pode dividir por zero!");resultado=0;return;}
resultado=valor1/valor2;
console.log("Operação: Divisão");
console.log("Valores:",valor1,"/",valor2);
console.log("Resultado:",resultado);
}

function contaPorcentagem(){
let valor1=Number(prompt("Digite o valor base: "));
let valor2=Number(prompt("Digite a porcentagem: "));
resultado=(valor1*valor2)/100;
console.log("Operação: Porcentagem");
console.log("Valores:",valor2,"% de",valor1);
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
let escolha=Number(prompt("Digite uma operação matemática: "));
switch(escolha){
case 0:
console.log("Encerrando...");
break;
case 1:
contaAdicao();
resultado=0;
break;
case 2:
contaSubtracao();
resultado=0;
break;
case 3:
contaDivisao();
resultado=0;
break;
case 4:
contaMultiplicacao();
resultado=0;
break;
case 5:
contaPorcentagem();
resultado=0;
break;
default:
console.log("Opção inválida!");
}
if(escolha===0) break;
}
