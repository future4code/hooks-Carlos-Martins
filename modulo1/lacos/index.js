//******************EXERCÍCIO DE INTERPRETAÇÃO************************ */
//----------------------------------------------------------------------
//Ex.01)
/*
let valor = 0
for(let i = 0; i < 5; i++) {
    console.log(valor)
  valor += i
}
console.log(valor)
*/
// imprime 10

//----------------------------------------------------------------------
//Ex.02)
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
*/
//a)imprime: 19,21,23,25,27,30
//b) sim mas precisa colocar a variavel indice e faz indice++ 

//----------------------------------------------------------------------
//Ex.03)
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/
// imprime   * 
//           **
//           ***
//           ****

//******************EXERCÍCIO DE ESCRITA***************************** */
//----------------------------------------------------------------------
//Ex.01)
/*
 const pets = Number(prompt("quantos bichinhos de estimação você tem?"))

 if(pets === 0) { 
     console.log("Que pena! Você pode adotar um pet!")
    }

 if(pets > 0){
   let arrayPets = []
   for(let i = 0; i < pets; i++){
     arrayPets.push(prompt("Qual o nome do seu bichinho?"))
   }
  console.log(arrayPets)
 }
*/

//----------------------------------------------------------------------
//Ex.02)


//const arrayOriginal =  [80, 30, 130, 40, 60,21,70,120,90,103,110,55]

//a)
/*
 function imprimirArrayOriginal (arrayOriginal) {
   for(let valor of arrayOriginal){
     console.log(valor)
   }
  }
 
  imprimirArrayOriginal(arrayOriginal)
*/
//b)
/*
 function imprimirArrayOriginal (arrayOriginal) {
   for(let valor of arrayOriginal){
     console.log(valor/10)
   }
 }

 imprimirArrayOriginal(arrayOriginal)
*/

//c) 
/*
 function imprimirPares (arrayOriginal) {
  let arrayPares = []
   for(let valor of arrayOriginal){
     if(valor % 2 == 0){
       arrayPares.push(valor)
     }
   }
   console.log(arrayPares)
 }
 imprimirPares(arrayOriginal)
*/

//d) 
/*
 function imprimirStrings (arrayOriginal){
   let Strings = []
   let i = 0
   for(let valor of arrayOriginal){
     Strings.push(`O elemento do índex ${i} é: ${valor}`)
     i++
   }
   console.log(Strings)
 }
 imprimirStrings (arrayOriginal)
*/

//e)
/*
 function tamanhoNumero (arrayOriginal){
   let maior = 0;
   let menor = 1000000;
  for(let i = 0; i < arrayOriginal.length; i++){

     if(arrayOriginal[i] < menor){
       menor = arrayOriginal[i]
     } else if(arrayOriginal[i] > maior){
       maior = arrayOriginal[i]
     }
   }
   console.log("O maior  é:", maior)
   console.log("O menor é:", menor)
 }
tamanhoNumero (arrayOriginal)
*/

//*******************************DESAFIO***************************** */
//----------------------------------------------------------------------

console.log("Vamos jogar!")
 const num_escolhido = Number(prompt("Um dos jogadores escolhe um número e digite:"))

 let acertou = false
 let tentativas = 0

 let num_chutado = 0

 while(!acertou){
     num_chutado = Number(prompt("Chute um número"))
     tentativas++
     console.log(`O número chutado foi: ${num_chutado}`)
     if(num_chutado === num_escolhido){
         console.log("Acertou!")
         console.log(`O número de tentativas foi : ${tentativas}`)
         acertou = true
     } else if (num_escolhido > num_chutado){
         console.log("Errou. O número escolhido é maior")
     } else {
         console.log("Errou. O número escolhido é menor")
     }
 }


