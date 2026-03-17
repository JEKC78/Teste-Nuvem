//Exercícios com a Lógica Inicial
//CONSUMO DE AUTOMOVEL

const prompt = require ("prompt-sync")()
let distancia = prompt("DIGITE A DISTANCIA PERCORRIDA EM KM :  ")
let consumo = prompt ('DIGITE A QUANTIDADE EM LITROS DE COMBUSTIVEL CONUMIDO. ')
let media = distancia / consumo
if (media >= 10.00){
    console.log ("----CONSUMO DENTRO DO PADRÃO OPERACIONAL----")
}
else {
    console.log ("ALERTA: SEU VEICULO ESTÁ CONSUMINDO MUITO COMBUSTIVEL. É NECESSÁRIO AGENDAR UMA REVISÃO MECÂNICA.")
}