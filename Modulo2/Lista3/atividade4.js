//Exercícios com a Lógica, arrays e Objetos
//Sistema de Lanchonete de Fast Food


//Para automatizar opções de cardápio virtual (totem em autoatendimento), crie o registro de um
//pedido virtual contendo o nome do cliente, o valor base de um hambúrguer premium (exemplo: R$
  //  30,00), a quantidade de lanches comprados e uma lista vazia para "Ingredientes Extras" (como
    //"Bacon", "Cheddar", etc.).
    //Peça ao usuário para digitar o nome de dois ingredientes extras desejados e o valor unitário de cada
    //extra. Adicione as strings (apenas os nomes) na lista de extras. Some os valores dos extras ao
    //cálculo: (valor base do hambúrguer + valor extra 1 + valor extra 2) *
    //quantidade . Se a lista de extras conter exatamente 2 itens E o cliente levar mais de 2 lanches,
    //aplique um desconto automático de 20% no valor total do pedido. Exiba o subtotal e o valor total na
    //tela com a lista de ingredientes.
    const prompt = require('prompt-sync')()
let pedido1 = prompt ('Digite seu nome: ')
    tabela = [
    add1 = {    
        extraBase : 'Hamburguer',
        pBase : 30.00,},
     add2 = {   
        extra1 : 'Bacon',
        pExtra1 : 3.00,},
    add3 = {
        Extra2 : 'Cheddar',
        pExtra2 : 2.50,}
    ]
let qtd = parseFloat(prompt("Quantos lanches deseja comprar: " ))
let ingredientes = []
let preco0 = 30.00
let extrall = parseFloat(prompt("Digite o primeiro adicional extra, bacon/ cheaddar : "))
let preco1 = parseFloat(prompt("digite o preço do primeiro adicional extra: "))
let extralll = parseFloat(prompt("Digite o segundo adicional extra, bacon/ cheaddar : "))
let preco = parseFloat(prompt("digite o preço do segundo adicional extra: "))
tabela.push(preco1,preco)
let soma = (qtd + preco1 + preco + preco0)
if (qtd > 2 + 1){
    console.log (soma - (soma*0.20))
}
else { 
console.log = soma
}
    //console.log (tabela)