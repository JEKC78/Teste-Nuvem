//Exercícios com a Lógica, arrays e Objetos
//Estação de monitoramento
const prompt = require('prompt-sync')()
let estacao= {
    id1: "Sensor1",
    id2: "Sensor2",
    id3: "Sensor3",
    local: "LABORATORIO",
    temperaturas: []
}
let temp1 = parseFloat(prompt ("Digite a primeira temperatura do dia:"  ))
let temp2 = parseFloat(prompt ("Digite a segunda temperatura do dia:"  ))
let temp3 = parseFloat(prompt ("Digite a segunda temperatura do dia:"  ))
estacao.temperaturas.push(temp1,temp2,temp3,)
let media = (estacao.temperaturas[0] + estacao.temperaturas[1]  + estacao.temperaturas[2] )/3
if (media>35) 
{estacao.alerta=true
    console.log ('PERIGO: MEDIA DE TEMPERATURA EXTREMA: '+(media)+ " GRAUS DETECTADA NO " ,(estacao.local))
    }
    else {
        estacao.alerta=false
    console.log (" temperatura dentro da normalidade")
}
console.log (estacao)

