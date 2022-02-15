//*******************EXERCÍCIOS DE INTERPRETAÇÃO*************** */
//---------------------------------------------------------------
//Ex.01)

/*
let array
console.log('a. ', array)
// imprime undifined, pois declaramos a variavel e não atrinuimos valor

array = null
console.log('b. ', array)
// imprime null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// imprime o tamanho do array = 11 elementos

let i = 0
console.log('d. ', array[i])
// array[0] = 3

array[i+1] = 19
console.log('e. ', array)
// atribui o valor 19 em array[1], segunda posição

const valor = array[i+6]
console.log('f. ', valor)
// imprime o valor que esta em array[6] = 9
*/

//---------------------------------------------------------------
//Ex.02)
/*
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
*/
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// SUBI NUM ÔNIBUS EM MIRROCOS, trocando A por I, coloca o tamanho da string = 27, pois conta os espaços tb.

//*******************EXERCÍCIOS DE ESCRITA******************* */
//---------------------------------------------------------------
//Ex.01)
/*
const nome = prompt("digite seu nome:")
const email = prompt("digite seu email:")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)
*/

//---------------------------------------------------------------
//Ex.02)
/*
const comidaFavorita = ["nhoque","macarrão","arroz","feijão","salada"];
console.log(comidaFavorita)
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidaFavorita[0])
console.log(comidaFavorita[1])
console.log(comidaFavorita[2])
console.log(comidaFavorita[3])
console.log(comidaFavorita[4])
const novaComidafavorita = prompt("digite uma nova comida favorita:")
comidaFavorita[1] = novaComidafavorita
console.log("Essas são as minhas novas comidas preferidas: ")
console.log(comidaFavorita[0])
console.log(comidaFavorita[1])
console.log(comidaFavorita[2])
console.log(comidaFavorita[3])
console.log(comidaFavorita[4])
*/

//---------------------------------------------------------------
//Ex.03)
/*
const listaDeTarefas = []
const tarefa1 = prompt("digite uma tarefa")
const tarefa2 = prompt("digite outra tarefa:")
const tarefa3 = prompt("digite uma outra tarefa")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

const n = Number(prompt("digite o indice de uma tarefa que voce já realizou: 0, 1 ou 2"))
listaDeTarefas.splice(n,1)
console.log(listaDeTarefas)
*/

//**************************DESAFIO*************************** */
//---------------------------------------------------------------
// Ex.01)
/*
const Frase = "Eu estou gostando da Labenu!"
const FraseArray = Frase.split(" ")
console.log(FraseArray)
*/

//---------------------------------------------------------------
// Ex.02)
/*
const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

const iAbabaxi = array.indexOf("Abacaxi"); // pesquisei https://www.w3schools.com/Jsref/jsref_obj_array.asp
const tamanhoArray = array.length;

console.log("Index abacaxi: ", iAbabaxi)
console.log("tamanho do array:", tamanhoArray);
*/
