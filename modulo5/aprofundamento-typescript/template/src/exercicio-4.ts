
/*----------------------------exercicio3 ----------------------------*/ 

// a) cole o codigo dado aqui

type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// b) 
// Usaria o comando tsc ./src/exercicio4.ts 

// c) 
//  mudaria a rootDir no tsconfig

// d) Existe alguma maneira de transpilar múltiplos arquivos de uma vez só? Caso conheça, explique como fazer.
// usando o tsc sem indicar um arquivo específico
//  o comando tsc sem parâmetros, que converte todos os arquivos com a extensão .ts que encontrar.