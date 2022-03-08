//****************************EXERCICIO DE INTERPRETAÇAO*************** */
//------------------------------------------------------------------------
//Ex.01
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
//O programa verifica se um número é par ou impar. Se imprimir "Passou no teste" é par e se imprimir "não passou no teste" é impar

//------------------------------------------------------------------------
//Ex.02
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    //break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
// o codigo pede uma fruta e imprime o preço da fruta pedida. Se digitar maça, imprime:  preco = 2.25. Se retirarmos o break, o codigo não para e imprime  default:preco = 5 break;

//------------------------------------------------------------------------
//Ex.03
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/
// a primeira linha pede para digitar um número. Se digitar 10 , imprime "Esse número passou no teste" . se for -10 da undefined assim como qaundo o console chama "console.log(mensagem)"". isso acontece pois não está previsto nada se o numero for negativo.

//**************************** EXERCICIO DE CODIGO ***************** */
//------------------------------------------------------------------------
//Ex.01
/*
const idadeDoUsuario = Number(prompt("Digite sua idade:"))

if(idadeDoUsuario > 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}
*/

//------------------------------------------------------------------------
//Ex.02
/*
const periodo = prompt("Digite o período: M (matutino) ou V (Vespertino) ou N (Noturno)")

 if (periodo === "M"){
  console.log("Bom dia!")
 } else if (periodo === "V"){
  console.log("Boa tarde!")
 } else if (periodo === "N"){
   console.log("Boa noite!")
 } else {
   console.log("Inválido!")
 }
 */

 //----------------------------------------------------------------------
//Ex.03
/*
 const periodo = prompt("Digite o período: M (matutino) ou V (Vespertino) ou N (Noturno)")

 switch (periodo) {
   case "M":
     console.log("Bom dia!")
     break;
   case "V":
     console.log("Boa tarde!")
     break;
   case "N":
     console.log("Boa noite!")
     break;
   default:
     console.log("Inválido")
     break;
 }
*/
//----------------------------------------------------------------------
//Ex.04
/*
 const filme = prompt("Qual o tipo do filme?")
 const preco = prompt("Qual o preço do bilhete?")

 if (filme === "fantasia" && preco <= 15) {
   console.log("Bom filme!")
 } else {
   console.log("Escolha outro filme :(")
 }
*/

//**************************** DESAFIO ******************************** */
//------------------------------------------------------------------------
//Ex.01
/*
const filme = prompt("Qual o tipo do filme?")
const preco = prompt("Qual o preço do bilhete?")
const lanche = prompt("Qual snack que você quer comprar?")

if (filme === "fantasia" && preco <= 15) {
    console.log("Bom filme!")
    console.log(`Aproveite o seu ${lanche}`)
} else {
    console.log("Escolha outro filme :(")
}
*/

//------------------------------------------------------------------------
//Ex.02

 const nome = prompt("Digite nome completo:")
 const tipo = prompt("(IN) internacional ou (DO) domestico")
 const etapa = prompt("(SF) Semi-final , (DT) Decisão Terceiro ou (FI) Final?")
 const categoria = Number(prompt(" 1, 2, 3 ou 4?"))
 const quantidade = Number(prompt("Número de ingressos?"))

 let precoDeCadaIngresso;
 // tipo foi para o final, pois é só multiplicar tudo por 4.1 se for internacional
 switch (etapa) {
   case "SF":
     switch (categoria) {
       case 1:
        precoDeCadaIngresso = 1320
         break;
       case 2:
        precoDeCadaIngresso = 880
         break;
       case 3:
        precoDeCadaIngresso = 550
         break;
       case 4:
        precoDeCadaIngresso= 220
         break;
       default:
        precoDeCadaIngresso = 0
         break;
     }
     break;
   case "DT":
     switch (categoria) {
       case 1:
        precoDeCadaIngresso = 660
         break;
       case 2:
        precoDeCadaIngresso= 440
         break;
       case 3:
        precoDeCadaIngresso = 330
         break;
       case 4:
        precoDeCadaIngresso = 170
         break;
       default:
        precoDeCadaIngresso = 0
         break;
     }
     break;
   case "FI":
     switch (categoria) {
       case 1:
        precoDeCadaIngresso = 1980
         break;
       case 2:
        precoDeCadaIngresso = 1320
         break;
       case 3:
        precoDeCadaIngresso = 880
         break;
       case 4:
        precoDeCadaIngresso = 330
         break;
       default:
        precoDeCadaIngresso = 0
         break;
     }
}

 if (tipo === "IN") {
   precoDeCadaIngresso = precoDeCadaIngresso * 4.1
 }

 let textoImprimidoTipo;
 if (tipo === "DO") {
   textoImprimidoTipo = "Doméstico"
 } else if (tipo === "IN") {
   textoImprimidoTipo = "Internacional"
 } else {
    textoImprimidoTipo = "Inválido"
 }

 let textoImprimidoEtapa;
 switch (etapa) {
   case "SF":
     textoImprimidoEtapa = "Semi-Final"
     break;
   case "DT":
    textoImprimidoEtapa = "Decisão Terceiro"
     break
   case "FI":
    textoImprimidoEtapa = "Final"
     break;
   default:
    textoImprimidoEtapa = "Inválido"
     break;
 }


 console.log("---Dados da compra---")
 console.log("Nome do cliente:", nome)
 console.log("Tipo do jogo:", textoImprimidoTipo)
 console.log("Etapa do Jogo:", textoImprimidoEtapa)
 console.log("Categoria:", categoria)
 console.log("---Valores--- ")
 console.log("Valor do Ingresso:", precoDeCadaIngresso)
 console.log("Valor Total da Compra:", precoDeCadaIngresso * quantidade)

