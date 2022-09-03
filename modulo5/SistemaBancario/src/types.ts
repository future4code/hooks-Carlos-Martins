export type Transacao = {
    valor: number,
    data: Date,
    descricao: string
}

export type Conta = {
    nome: string,
    CPF: string,
    dataDeNascimento: Date,
    saldo: number,
    extrato: Array<Transacao>

}

export const contas: Conta[] = []