

export type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: String
}

export const users: User[] = [
    {
        id: 1,
        name: "Pedro Jose",
        phone: "41-9995-7869",
        email: "pedro@labenu.com",
        website: "pedro.net",
    },
    {
        id: 2,
        name: "Jose Pedro",
        phone: "41-9445-7349",
        email: "jose@labenu.com",
        website: "jose.net",
    },
    {
        id: 3,
        name: "Maria Jose",
        phone: "42-9555-3456",
        email: "maria@labenu.com",
        website: "maria.net",
    },
]

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
    
}

export const posts: Post[] = [
    {
      userId: 1,
      id: 4,
      title: "Títulos de dívida corporativa crescem 59% no terceiro trimestre, com estoque de R$ 1,2 trilhão, diz B3",
      body: "Os títulos de renda fixa corporativos (debênture, CRA, CRI, FIDC e Nota Comercial) registrados na B3 tiveram aumento de 59% no terceiro trimestre deste ano, com relação a igual período de 2021. Os ativos somaram R$ 1,2 trilhão em estoque. "
    },
    {
      userId: 2,
      id: 5,
      title: "Carlos Cereto exclui títulos do Palmeiras e aponta Flamengo como maior vencedor do Brasileirão",
      body: "Ex-apresentador da Globo ignora unificação decretada pela CBF em 2010 e tira quatro títulos de Brasileirão do Palmeiras"
    },
    {
      userId: 3,
      id: 6,
      title: "Produtores recebem títulos de propriedade",
      body: "Agricultores de 14 cidades de seis regiões do Estado passam agora ter acesso às políticas públicas do setor"
    },
]