/*----------------------------exercicio1 ----------------------------*/
// a)

//const minhaString: string = 2
//O tipo 'number' não pode ser atribuído ao tipo 'string'

// b)

//const meuNumero: number | string = 'guto'

//c) 
 type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: coresArcoIres
 }

 enum coresArcoIres {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    VIOLETA = 'violeta'
 }

 const pessoa1: Pessoa = {
    nome: "Pedro",
    idade: 34,
    corFavorita: coresArcoIres.VERDE
 }

 const pessoa2: Pessoa = {
    nome: "Joao",
    idade: 34,
    corFavorita: coresArcoIres.AMARELO
 }
 const pessoa3: Pessoa = {
    nome: "Maria",
    idade: 34,
    corFavorita: coresArcoIres.AZUL
 }

 /*----------------------------exercicio2 ----------------------------*/

 function obterEstatisticas(numeros: number[]) : Estatisticas {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas : Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

// a)
// Entrada: array (objeto) / Saída: objeto
// b)
// soma e num são number, numerosOrdenados é  objeto (array).
// c)

type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Estatisticas
}
const amostraDeIdades : amostraDeDados = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas
}


/*----------------------------exercicio3 ----------------------------*/

const posts : Post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  // a)

  type Post = {
    autor: string,
    texto: string
  }

 // b) 

  function buscarPostsPorAutor(posts : Post[], autorInformado: string): Post[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  // A entrada é um array (posts) do tipo Post[] e um nome de autor do tipo string. A saída é um array de posts (Post[])

