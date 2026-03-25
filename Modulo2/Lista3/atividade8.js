//Exercícios com a Lógica, arrays e Objetos
/*Gestão de Eventos para Festival de Música
Para coordenar os ingressos VIPs de um festival, crie o pacote de um grupo corporativo contendo o
nome da empresa , o orçamentoTotal da noite, uma chave booleana openBarFechado
(inicie falsa) e uma lista vazia de consumoExtras (que guardará o nome das bebidas que os
executivos pedirem fora do pacote).
Peça ao promotor do evento para lançar o nome de duas bebidas importadas e o valor total que
essas duas somadas custaram. Adicione as bebidas no array de extras. Verifique a planilha
financeira: subtraia o valor gasto com essas bebidas do orçamentoTotal . Se após esse
abatimento o saldo restante do orçamento for menor que R$ 0,00, altere a chave openBarFechado
para true (cortando a bebida deles) e crie uma propriedade "Multa Excedente" de R$ 500,00 no
registro. Se sobrar dinheiro, apenas atualize o orçamento restante. Imprima o fechamento financeiro
do camarote.*/
const prompt = require('prompt-sync')()
let empresa = {
    Nome : 'BKL',
    orcamentoTotal: '100',
    openBarFechado: false,
    consumosExtras :[]
   }
   let lan1 = prompt('Digite as duas bebidas desejadas: ')
   empresa.consumosExtras.push (lan1)
   let val = prompt ('Digite o valor das bebidas escolhidas: ')
   let gas = (empresa.orcamentoTotal - val)
   let multa = '500'
   if (gas <= 0 ){
    console.log ('Limite ultrapassado, Multa excedente R$ 500,00' ,gas + multa )
    console.log ('openBarFechado')
   }
else {
   // console.log ('')
    console.log ('openBarAberto');
    
}
    console.log ('Fechamento financeiro:R$'+ gas);