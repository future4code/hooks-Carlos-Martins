//***************************EXERCICIOS DE INTERPRETAÇÃO************* */
//----------------------------------------------------------------------
//Ex.01) 
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
*/
// { nome: "Amanda Rangel", apelido: "Mandi" }, 0, repete o array inteiro
// { nome: "Laís Petra", apelido: "Laura" }, 1, repete o array inteiro
// { nome: "Letícia Chijo", apelido: "Chijo" }, 2, repete o array inteiro

//----------------------------------------------------------------------
//Ex.02) 
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

  // ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo'] pois pediu item.nome
  */

//----------------------------------------------------------------------
//Ex.02) 
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
*/
//   { nome: "Amanda Rangel", apelido: "Mandi" }, pois exclui Chijo
//   { nome: "Laís Petra", apelido: "Laura" }

//***************************EXERCICIOS DE ESCRITA******************** */
//----------------------------------------------------------------------
//Ex.01)
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a)
 const petsNomes = pets.map((pet) => {
        return pet.nome
 })

 console.log(petsNomes)

 //b)

 const caoSalsicha = pets.filter((cao) => {
   return cao.raca === "Salsicha"
 })

 console.log(caoSalsicha)

 //c) 

  const poodles = pets.filter((cao) => {
   return cao.raca === "Poodle"
 })

 const descontoPoodle = poodles.map((poodle) => {
   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`
 })

  console.log(descontoPoodle)
  */

//----------------------------------------------------------------------
//Ex.02) 
/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a)

 const nomeProdutos = produtos.map((produto) => {
     return produto.nome
 })

 console.log(nomeProdutos)

 //b) 

 
 const produtosDesconto = produtos.map((produto) => {
   return { nome: produto.nome, preco: (produto.preco * 0.95) }
 })

 console.log(produtosDesconto)

 //c) 

 const bebidas = produtos.filter((produto) => {
     return produto.categoria == "Bebidas"
 })

 console.log(bebidas)

 //d)

 const ype = produtos.filter((produto) => {
     return produto.nome.includes("Ypê")
 })

 console.log(ype)

 //e)

  const Ype = ype.map((produto) => {
   return `Compre ${produto.nome} por ${produto.preco}`;
 })

console.log(Ype)
*/
//*******************************DESAFIO***************************** */


const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" }
  ]
  
//a)
  const nomePokemons = pokemons.map((pokemon) => {
    return pokemon.nome
  })
  
  const pokemonsOrdemAlfabetico = nomePokemons.sort((a, b) => a.localeCompare(b))
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  console.log(pokemonsOrdemAlfabetico)

  
