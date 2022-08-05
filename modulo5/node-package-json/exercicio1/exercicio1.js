const colors = require("colors")

const username = process.argv[2] 
const age = Number(process.argv[3])

const parametros = process.argv.length - 2

if (parametros < 2) {
  return console.log(`Esperava 2 parâmetros só recebi ${parametros}`.red)
}

console.log(`Olá, ${username}! Você tem ${age} anos.`.yellow)

console.log(`Olá, ${username}! Você tem ${age} anos. Em sete anos você terá ${age+7}`.blue)