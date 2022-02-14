// *********************** EXERCÍCIO DE INTERPRETAÇÃO ***********
// --------------------------------------------------------------
/* ex 1)
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

10
10 5
*/
// ----------------------------------------------------------------
/* ex 2)
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

10 10 10 
*/
// --------------------------------------------------------------
/* ex 3)
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

// o programa divide salario diario por hora trabalhada
*/

// ********************* EXERCÍCIO DE ESCRITA *****************
// ------------------------------------------------------------
// Ex 1)
/*
let nome
let idade

console.log(typeof nome) 
console.log(typeof idade)
// ****** como não colequei nada na variavel, deu undefined

const nome1 = prompt("Qual é o seu nome?")
const idade1 = prompt("Qual é a sua idade?")
console.log(typeof nome1) 
console.log(typeof idade1)

// escreveu que é uma string. o prompt trabalha com string , tem ///que converter para numero.

console.log("Ola", nome1 , "você tem", idade1, "anos" )
*/

// ------------------------------------------------------------
// Ex 2)
/*
const temperatura = prompt("Você está com calor hoje? Sim/Não")
const estado = prompt("Voce está com fome? Sim/Não")
const esporte = prompt("Você gosta de esportes? Sim/Não")

console.log("Você está com calor hoje? - ",temperatura)
console.log("Voce está com fome? - ", estado)
console.log("Você gosta de esportes? - ", esporte) 
*/

// ------------------------------------------------------------
// Ex 3)
/*
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
*/

// ************************* DESAFIO **************************
// ------------------------------------------------------------

const num1 = Number(prompt("digite um número:"))
const num2 = Number(prompt("digite outro número"))
console.log("O primeiro número somado ao segundo número resulta em:", num1 + num2)
console.log("O primeiro número multiplicado pelo segundo número resulta em", num1*4
3num2)