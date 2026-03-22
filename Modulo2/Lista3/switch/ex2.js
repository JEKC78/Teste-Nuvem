//Vamos desenvolver um programa que classifique notas, ele vai receber um
//número de 0 a 100 e usando switch, retorna uma String com a classificação
//da nota de acordo com o seguinte critério:
//90 a 100: "A"
//80 a 89: "B"
//70 a 79: "C"
//60 a 69: "D"
//0 a 59: “F”
//Caso Padrão: “Nota Inválida”
//Dica: use como variável do switch true, e em cada caso, coloque condições
//to tipo case (nota >= 90 && nota <= 100) e assim por diante.
//Desafio: pedir a nota para o usuário digitar usando stdin. E imprimir
///mensagem com a classificação e se ele foi aprovado (C para cima) ou não.
const prompt = require('prompt-sync')()
//while (true){
    let nota = parseFloat(prompt('Digite sua nota:'))
    console.log (nota)
switch (true){
    case (nota >= 90 && nota <= 100):
        console.log ('Nota A');
        break;
    case (nota >= 80 && nota <= 89):
        console.log ('Nota B');
        break;
    case (nota >= 70 && nota <= 79):
        console.log ('Nota C');
        break;
    case (nota >= 60 && nota <= 69):
        console.log ('Nota D');
        break;
    case (nota >= 0 && nota <= 59):
        console.log ('Nota F');
        break;
//default:
    

}    

