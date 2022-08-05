const colors = require("colors")

const operacao = process.argv[2]
const primeiroNum = Number(process.argv[3])
const segundoNum = Number(process.argv[4])

let resultado = "Resultado: "

switch (operacao) {
  case "soma":
    resultado = primeiroNum + segundoNum
    break
  case "subtracao":
    resultado = primeiroNum - segundoNum
    break
  case "multiplicacao":
    resultado = primeiroNum * segundoNum
    break
  case "divisao":
    resultado = (primeiroNum / segundoNum).toFixed(1)
    break
  default:
    resultado = "operacao invalida"
}

console.log(resultado.green)