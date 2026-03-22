//Crie um programa que receba (via prompt-sync ou stdin) o gênero do
//filme escolhido: "Ação", "Comédia", "Terror" ou "Animação". Use a
//estrutura switch para imprimir em qual sala o filme passará:

//● Ação: "Sala 1"
//● Comédia: "Sala 2"

//● Terror: "Sala 3"

//● Animação: "Sala 4"
//● Caso padrão (default): "Gênero não encontrado. Verifique as opções
//válidas."
const prompt = require('prompt-sync')()
//while (true){
    let Filmes = prompt('Qual a categoria você quer assistir hoje: ')
switch (Filmes){
    case 'Ação':
       console.log ('Sala 1!');
    break;
    case 'Comédia':
        console.log ('Sala 2!');
    break;
    case 'Terror':
        console.log ('Sala 3!');
    break;
    case 'Animação':
        console.log ('Sala 4')
    break;
    
    default:
    console.log ('Assista qualquer um!');
}
