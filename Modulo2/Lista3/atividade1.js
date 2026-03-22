//Exercícios com a Lógica, arrays e Objetos
//Carrinho de Compras de E-commerce
const prompt = require('prompt-sync')()
let Ecommerce = {
    Cliente: 'PEDRO',
    Assinatura1: 'PRIME',
    Assinatura2: 'PADRAO',
    Produto: []
}
    let Feijao = parseFloat(prompt ("Digite o preço: "))
    let Arroz = parseFloat(prompt ("Digite o preço do Arroz: "))
    let Macarrao = parseFloat(prompt ("Digite o preço do macarrão: "))
    let soma = (Ecommerce.Feijao[0]+ Ecommerce.Arroz[1]+Ecommerce.Macarrao[2])
    console.log (soma)
Ecommerce.Produto.push (Feijao, Arroz, Macarrao)
media= (Ecommerce.Produto[0] + Ecommerce.Produto[1] + Ecommerce.Produto[2])/3
if (media > 200 || Ecommerce.Assinatura1){
console.log ("Parabéns você ganhou Frete Grátis")
}
  else {
    console.log (Ecommerce.Produto + 30)
  }  
