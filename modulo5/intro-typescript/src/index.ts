 
/*------------------------- exercicios 1 ----------------------------*/
/*
const a = Number(process.argv[2])
const b = Number(process.argv[3])
const c = Number(process.argv[4])

function checaTriangulo(a: number, b: number, c: number) : string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checaTriangulo(a,b,c))
*/

/*------------------------- exercicios 2 ----------------------------*/

function imprimeTresCoresFavoritas() : void {
  const cor1 : string = process.argv[2]
  const cor2 : string= process.argv[3]
  const cor3 : string = process.argv[4]
  console.log([cor1, cor2, cor3])
}

const result = imprimeTresCoresFavoritas()
console.log(result)
  
/*------------------------- exercicios 3 ----------------------------*/
/*
const ano = Number(process.argv[2])

function checaAnoBissexto(ano: number) : boolean {
  const cond1 = ano % 400 === 0
  const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
  return cond1 || cond2
}

const result = checaAnoBissexto(ano)
console.log(result)
*/

/*------------------------- exercicios 4 ----------------------------*/
/*
const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])
function comparaDoisNumeros(num1:number, num2: number) : number {
  let maiorNumero;
  let menorNumero;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca = maiorNumero - menorNumero;

  return diferenca 
}

const result = comparaDoisNumeros(num1,num2)
console.log(result)
*/

/*------------------------- exercicios 5 ----------------------------*/
/*
const anoAtual = Number(process.argv[2])
const anoNascimento = Number(process.argv[3])
const anoEmissao = Number(process.argv[4])

function checaRenovacaoRG(anoAtual: number, anoNascimento : number, anoEmissao : number ) : string {
  let idade = anoAtual - anoNascimento
  let tempoCarteira = anoAtual - anoEmissao
 
   if(idade <= 20 ) {
       return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
     
    }else if(idade >= 20 || idade <= 50) {
       return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
     
    }else if(idade > 50) {
       return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
     
     }else {
         return "error"
     }
 }

 const result = checaRenovacaoRG(anoAtual,anoNascimento,anoEmissao)

 console.log(result)
 */

