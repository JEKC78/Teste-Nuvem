const prompt = require(prompt-sync)()
let n1 = number(prompt ('Digite o primeiro numero: '))
let n2 = number(prompt('Digite o segundo numero: '))
let op = number(prompt('digite a operação, (+, -, *,/,%: )'))
switch (resultado){
    case '+':
    logica = n1 + n2
    break;
    
    case '-':
     logica = n1 - n2
    break; 


    case  '*':
        logica = n1 * n2
       break; 
    
       case '/':
        logica = n1 / n2
       break; 
      default:
      console.log ("Operação invalida")  



}
else if (operacao === "-"){
    resultado = n1 - n2
}
else if (operacao === "*"){
    resultado = n1 * n2
}
else if (operacao === "/"){
    resultado =  n1 / n2
    resultado = ("Operação invalida")
}
    Alert ("resultado:" + resultado)
