//*************************EXERCÍCIO DE INTERPRETACAO***************** */
//----------------------------------------------------------------------
// Ex.01)
/*
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
*/
//a) 10 e 50
// se tirar o console , não imprime nada na tele

//----------------------------------------------------------------------
// Ex.02)
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
*/
//a) a função pede para o usuário escrever um texto. Este texto serve de parâmetro para a função, outraFuncao(). Esta função deixa todas as letras em minúsculo e verifica se existe a palavra "cenoura" , retornando false ou true.

// b) i. true ; ii. true ; iii. true
//*************************EXERCÍCIO DE ESCRITA********************** */
//----------------------------------------------------------------------
// Ex.01)
/*
const nome = "Caio" 
const idade = 23 
const endereco = "São Paulo"
const profissao = "estudante"

function imprimir () {
    console.log(` Eu sou ${nome}, tenho ${idade}, moro em ${endereco} e sou ${profissao}`)
}

 imprimir()
 
 function imprimirFrase( nome,idade,cidade,profissao) {
     return ` Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`
 }

 const frase = imprimirFrase('Lais',23,'São Paulo','instrutora')
 console.log(frase)
 */

//----------------------------------------------------------------------
// Ex.02)
/*
function soma(numero1, numero2) {
	return numero1 + numero2
}
const resultado1 = soma(10, 15)
console.log('a)', resultado1)

//b
function primeiroMaior(numero1, numero2) {
	return numero1 >= numero2	
}

const resultado2 = primeiroMaior(35, 30)
console.log('b)', resultado2)

//c
function parImpar(numero) {
	return numero % 2 === 0
}

const resultado3 = parImpar(4)
console.log('c)', resultado3)

//d
function Tamanho(texto) {
	return `${texto.length}, ${texto.toUpperCase()}`
}

console.log('d)', Tamanho('Olá pessoal'))
*/
//----------------------------------------------------------------------
// Ex.03)
/*
const numero1 = Number(prompt("Digite um número:"))
const numero2 = Number(prompt("Digite outro número:"))

function soma(numero1, numero2) {
	return numero1 + numero2
}

function sub(numero1, numero2) {
	return numero1 - numero2
}

function mult(numero1, numero2) {
	return numero1 * numero2
}

function div(numero1, numero2) {
	return numero1 / numero2
}

console.log('soma:',soma(numero1,numero2))
console.log('subtração:',sub(numero1,numero2))
console.log('multiplicação:',mult(numero1,numero2))
console.log('divisão', div(numero1,numero2))
*/

//*****************************DESAFIO******************************* */
//----------------------------------------------------------------------
// Ex.01)
/*
const imprime = (resultado) => {
    console.log(resultado)
}

imprime('Oi')

const somaNumeros = (numero1,numero2) => {
    const soma = numero1 + numero2
    imprime(soma)
}

somaNumeros(3,7)
*/

//----------------------------------------------------------------------
// Ex.02)

const pitagoras = (a,b) => {
    const hip = (a ** 2 + b ** 2) ** (1/2)
    return hip
}

console.log(pitagoras(3,4))