// **************************EXERCICIO DE INTERPRETAÇÃO ****************
// ---------------------------------------------------------------------
//Ex.01)
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // aparecerá Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // aparecerá Virginia Cavendish
console.log(filme.transmissoesHoje[2]) // aparecerá {canal: "Globo", horario: "14h"}
*/
// ---------------------------------------------------------------------
//Ex.02)
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"} 

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")} 

console.log(cachorro) // imprime {nome: "Juca", idade: 3, raca: "SRC"}
console.log(gato) // imprime {nome: "Juba", idade: 3, raca: "SRC"}
console.log(tartaruga) // imprime {nome: "Jubo", idade: 3, raca: "SRC"}

os três pontos copia o objeto inteiro. no caso, gato copio o objeto cachorro, apenas mundando o nome.

*/
// **************************EXERCICIO DE CODIGO ***********************
// ---------------------------------------------------------------------
//Ex.01)
/*
const pessoa = {
    nome: "Amanda",
    apelido: ["Amandinha","Mandinha","Mandi"]
}

function imprimirFrase(objeto) {
    console.log(`Eu sou ${pessoa.nome},mas pode me chamar de:${pessoa.apelido}`)
}

imprimirFrase(pessoa)

const novaPessoa = { ...pessoa, apelido: ["Amandita","Mandis","Amandão"]}

function imprimirNovafrase(objeto) {
    console.log(`Eu sou ${novaPessoa.nome},mas pode me chamar de:${novaPessoa.apelido}`)
}

imprimirNovafrase(novaPessoa)
*/

// ---------------------------------------------------------------------
//Ex.02)
/*
 const pessoa = {
   nome: "Bruno",
   idade: 23,
   profissao: "Instrutor"
 }


 function imprime(objeto) {
   return [
       pessoa.nome,
       pessoa.nome.length,
       pessoa.idade,
       pessoa.profissao,
       pessoa.profissao.length
    ]
   }

 console.log(imprime(pessoa))
*/

// ---------------------------------------------------------------------
//Ex.03)
/*
 const carrinho = []

 const fruta1 = {
   nome: "morango",
   disponibilidade: true
 }

  const fruta2 = {
   nome: "laranja",
   disponibilidade: true
 }

 const fruta3 = {
   nome: "banana",
   disponibilidade: true
 }

 function adicionarNoCarrinho(fruta) {
   carrinho.push(fruta)
 }

 adicionarNoCarrinho(fruta1)
 adicionarNoCarrinho(fruta2)
 adicionarNoCarrinho(fruta3)


 console.log(carrinho)
*/
// ******************************DESAFIO *******************************
// ---------------------------------------------------------------------
//Ex.01)
/*
 function cliente() {
   const pessoa = {
     nome: prompt("Nome:"),
     idade: Number(prompt("Idade:")),
     profissao: prompt("Profissão:")
   }

  console.log(pessoa)
  console.log(typeof pessoa)
 }

 cliente()
 */
// ---------------------------------------------------------------------
//Ex.02)
/*
 function compararFilme(filme1,filme2 ) {
   return `O primeiro filme foi lançado antes do segundo? ${
     filme1.ano < filme2.ano}
O primeiro filme foi lançado no mesmo ano do segundo? ${
     filme1.ano === filme2.ano}`
 }

 const filme1 = {
   nome: "Gladiador",
   ano: 2000
 }

 const filme2 = {
   nome: "Rocky um lutador",
   ano: 1976
 }

 console.log(compararFilme(filme1,filme2))
*/
// ---------------------------------------------------------------------
//Ex.03)


/*
 const carrinho = []

 const fruta1 = {
   nome: "morango",
   disponibilidade: true
 }

  const fruta2 = {
   nome: "laranja",
   disponibilidade: true
 }

 const fruta3 = {
   nome: "banana",
   disponibilidade: true
 }

 function adicionarNoCarrinho(fruta) {
   carrinho.push(fruta)
 }

 adicionarNoCarrinho(fruta1)
 adicionarNoCarrinho(fruta2)
 adicionarNoCarrinho(fruta3)


 console.log(carrinho)

 function disponibilidade(fruta) {
   return {...fruta, disponibilidade: !fruta.disponibilidade}
  }
 
  console.log(disponibilidade(fruta1))
*/