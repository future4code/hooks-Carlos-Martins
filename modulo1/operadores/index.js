// *********************** EXERCÍCIO DE INTERPRETAÇÃO ***********
//----------------------------------------------------------------
//Ex 0.1)
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)  // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)  // verdadeiro

console.log("d. ", typeof resultado) // booleano
*/

//----------------------------------------------------------------
//Ex 0.2)
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)  // o prompt considera como string e não como //// numeros
*/

//----------------------------------------------------------------
//Ex 0.3)
// colocar a funcão prompt dentro de Numer()

// *********************** Exercício de Escrita *****************
//----------------------------------------------------------------
//Ex 0.1)
/*
const idade = Number(prompt("Qual é a sua idade?"))
const idadeAmigo = Number(prompt("Qual é a idade do seu amigo?"))
console.log( "Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo)
*/

//----------------------------------------------------------------
//Ex 0.2)
/*
const numero = Number(prompt("Digite um número par:"))
resto = numero % 2
console.log(resto)
*/
// o resto é sempre 0 e se for impar o resto é 1


//----------------------------------------------------------------
//Ex 0.3)
/*
const idade = Number(prompt("Qual é a sua idade?"))
console.log(idade*12 + " meses")
console.log(idade*365 + " dias")
console.log(idade*8760 + " horas")
*/

//----------------------------------------------------------------
//Ex 0.4)
/*
const num1 = Number(prompt("digite um número:"))
const num2 = Number(prompt("digite outro número:"))

console.log("O primeiro numero é maior que segundo?", num1>num2)
console.log("O primeiro numero é igual ao segundo?", num1 == num2)
console.log("O primeiro numero é divisível pelo segundo?", num1%num2==0)
console.log("O segundo numero é divisível pelo primeiro?",num2%num1==0)
*/

// ************************** Desafio ****************************
//----------------------------------------------------------------
//Ex 1)
/*
let KELVIN 
const GRAUS_FAHRENHEIT = 77
KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
console.log(KELVIN + " K")
*/
/*
let GRAUS_FAHRENHEIT
const GRAUS_CELSIUS = 80
GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*(9/5) + 32
console.log(GRAUS_FAHRENHEIT + " °F")
*/
/*
const GRAUS_CELSIUS = Number(prompt("Insira a temperatura em graus celsius"))
let GRAUS_FAHRENHEIT
GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*(9/5) + 32
console.log(GRAUS_FAHRENHEIT + " F")
let KELVIN
KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
console.log(KELVIN + " K")
*/
//----------------------------------------------------------------
//Ex 2)
/*
const desconto = 0.15
const quilowatt_hora = 280
valorPago = quilowatt_hora*0.05
console.log("R$ " + valorPago)
console.log("com desconto de 15%:", valorPago - valorPago*0.15)
*/
//----------------------------------------------------------------
//Ex 3)
/*
const mlb = 20
console.log("20lb esquivalem a " + mlb*0.4535 + " kg")
const oz = 10.5
console.log("10.5oz equivalem a " + oz*0.0283 + " kg")
const mi = 100
console.log("100mi equivalem a " + mi*1609.34 + " metros")
const ft = 50
console.log("50ft equivalem a " + ft*0.3048 + " metros")
const gal = 103.56
console.log("103.56gal equivalem a " + gal*3.7854 + " litros")
const xic = 450
console.log("450 xic equivalem a " + xic*0.24 + " litros")
const peso = Number(prompt("digite um peso em libras:"))
console.log( peso + "lb esquivalem a " + peso*0.4535 + " kg")
*/