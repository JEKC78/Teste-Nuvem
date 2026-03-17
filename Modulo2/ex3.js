const prompt = require ("prompt-sync")()
var pergunta = prompt('Você gosta de café:').toLowerCase().trim()

if (pergunta != "") {
    if (pergunta == "sim") {
        console.log ('Cuidado,consumo de café excessivo, pode causar efeitos colaterais')
    } else {
        console.log ('Parabéns, retirar a cafeína de sua vida é algo saudavel:')
    }
} else {
    console.log("Você nao digitou nada!");
}

