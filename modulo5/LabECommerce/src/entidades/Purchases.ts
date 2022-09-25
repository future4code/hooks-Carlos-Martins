export default class Purchases {
    constructor(
        readonly userId: string,
        readonly produtoId: string,
        readonly quantidade: number,
        readonly total: number
    ){
    
        if(typeof userId !== "string") throw new Error("O type userId precisa ser uma string")
        if(typeof produtoId !== "string") throw new Error("O type produtoId precisa ser uma string")
        if(typeof quantidade !== "number") throw new Error("O type quantidade precisa ser um number")
        if(typeof total !== "number") throw new Error("O type total precisa ser uma number")
    }
}