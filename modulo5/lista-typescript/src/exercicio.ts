/*----------------------exercicio1--------------------------*/

const ex1 = (nome:string, nascimento: string) :string => {
  const[dia,mes,ano] = nascimento.split("/")
  const frase: string = `Olá, me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano ${ano}`
  return frase

}

// console.log(ex1("guto","18/11/1984"))

/*----------------------exercicio2--------------------------*/

const ex2 = (variavel: any): void => {
//  console.log(typeof variavel)
}

// ex2("guto")

/*----------------------exercicio3--------------------------*/

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror"
}

type filme = {
  nome: string;
  anoLancamento: number;
  genero: GENERO;
  nota?: number;
};

const ex3 = (
  nome: string,
  ano: number,
  genero: GENERO,
  nota?: number
): filme => {
  if (nota) {
    return {
      nome: nome,
      anoLancamento: ano,
      genero: genero,
      nota: nota
    };
  } else {
    return {
      nome: nome,
      anoLancamento: ano,
      genero: genero
    };
  }
};

// console.log(ex3("Rocky, um lutador",1976,GENERO.DRAMA,87))
// console.log(ex3("O xangô de Baker Street" ,2001,GENERO.COMEDIA))

/*----------------------exercicio4-----------------------------*/


enum SETORES {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro"
}

type colaboradores = {
  nome: string;
  salário: number;
  setor: SETORES;
  presencial: boolean;
};

const lista: colaboradores[] = [
  { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
  { nome: "Saulo", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
];

const ex4 = (lista: colaboradores[]): colaboradores[] => {
  const listaDepoisFiltro: colaboradores[] = lista.filter((colaborador) => {
    return colaborador.setor === SETORES.MARKETING && colaborador.presencial;
  });
  return listaDepoisFiltro;
};

// console.log(ex4(lista));

 /*----------------------exercicio5-----------------------------*/

 enum ROLE {
  ADMIN = "admin",
  USER = "user"
}

type usuario = {
  name: string;
  email: string;
  role: ROLE;
};

const ListaDeUsuarios: usuario[] = [
  { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
  { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
  { name: "Aline", email: "aline@email.com", role: ROLE.USER },
  { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
  { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
  { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
];

const ex5 = (list: usuario[]): string[] => {
  const ListaDeEmail: string[] = list
    .filter((user) => user.role === ROLE.ADMIN)
    .map((user) => user.email);
  return ListaDeEmail;
};

 // console.log(ex5(ListaDeUsuarios));

 /*---------------------exercicio6-----------------------------*/

 type conta = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const listaDeClientes: conta[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];

const ex6 = (lista: conta[]): conta[] => {
  lista.forEach((cliente) => {
    const totalDebitos = cliente.debitos.reduce((a, b) => a + b, 0);
    cliente.saldoTotal -= totalDebitos;
    cliente.debitos = [];
  });
  const contasNegativas = lista.filter((conta) => conta.saldoTotal < 0);
  return contasNegativas;
};

console.log(ex6(listaDeClientes));
