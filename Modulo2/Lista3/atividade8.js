//Exercícios com a Lógica, arrays e Objetos
//Gestão de Eventos para Festival de Música
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