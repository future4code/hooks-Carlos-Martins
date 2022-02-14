// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("digite a altura do retangulo:"))
  const largura = Number(prompt("digite a largura do retangulo:"))
  area = altura*largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const ano_atual = Number(prompt("digite o ano atual:"))
  const ano_aniversário = Number(prompt("digite o ano do seu aniversário:"))
  idade = ano_atual - ano_aniversário
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("digite seu nome:")
  const idade = prompt("digite sua idade:")
  const email = prompt("digite seu email:")
  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(frase)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("digite uma cor favorita:")
  const cor2 = prompt("digite outra cor favorita:")
  const cor3 = prompt("digite outra cor favorita:")
  console.log([cor1,cor2,cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
   return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[(array.length - 1)]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = array[0]
  const ultimo = array[array.length - 1]
  array[0] = ultimo
  array[array.length - 1] = primeiro
  return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() == string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite sua idade:"))
  const anoNascimento = Number(prompt("Digite ano de nascimento:"))
  const anoRG = Number(prompt("Ano da RG:"))

  const idade = anoAtual - anoNascimento
  const idadeRG = anoAtual - anoRG

  const jovem = (idade <= 20) && (idadeRG >=5)  // tempo para ser renovada
  const adulto = (idade > 20 && idade <= 50) && (idadeRG >= 10)
  const idoso = (idade > 50) && (idadeRG >=15)

  console.log(jovem || adulto || idoso)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const bissexto1 = (ano % 400 == 0)
  const bissexto2 = (ano % 4 == 0) && ( ano % 100 != 0)
  return bissexto1 || bissexto2

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos? sim/não")
  const ensinoMedio = prompt("Você possui ensino médio completo? sim/não")
  const tempo = prompt("Você possui disponibilidade exclusiva durante os horários do curso? sim/não")

  console.log((idade == "sim") && (ensinoMedio == "sim") && (tempo == "sim"))

}