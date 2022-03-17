// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort((a,b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            arrayPares.push(array[i])
        }
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayParesElevadosDois = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            arrayParesElevadosDois.push(array[i] * array[i])
        }
    }
    return arrayParesElevadosDois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
     let maior = -Infinity
     for(let i = 0; i < array.length; i++) {
         if( array[i] > maior){
             maior = array[i]
         }
     }
     return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
     let maiorNumero
     let menorNumero
     let maiorDivisivelPorMenor

     if ( num1 > num2){
         maiorNumero = num1
         menorNumero = num2
     } else {
         maiorNumero = num2
         menorNumero = num1
     }

     let diferenca = maiorNumero - menorNumero
     maiorDivisivelPorMenor = maiorNumero % menorNumero == 0

     return {
         maiorNumero: maiorNumero,
         maiorDivisivelPorMenor: maiorDivisivelPorMenor,
         diferenca: diferenca,
     }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const pares = []
    for( let i = 0; pares.length < n; i++)
     if(i % 2 == 0){
        pares.push(i)
     }

    return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if( ladoA == ladoB && ladoB== ladoC){
        return "Equilátero" 
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

     let Array = []
     array.sort((a,b) => a - b)
     Array.push(array[lenght-2])
     Array.push(array[1])

    return Array
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        ...pessoa,
        nome: "ANÔNIMO"
      }
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasPermitidas = []
  for (let pessoa of pessoas) {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      pessoasPermitidas.push(pessoa)
    }
  }
  return pessoasPermitidas
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoPermitidas = []
  for (let pessoa of pessoas) {
    if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
      pessoasNaoPermitidas.push(pessoa)
    }
  }
  return pessoasNaoPermitidas
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
   
}