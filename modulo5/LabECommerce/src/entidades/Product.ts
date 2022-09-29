export default class Product {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly description: string,
        readonly price: number
    ){
        if(typeof id !== "string") throw new Error("O type id precisa ser uma string")
        if(typeof name !== "string") throw new Error("O type name precisa ser uma string")
        if(typeof description !== "string") throw new Error("O type description precisa ser uma string")
        if(typeof price !== "number") throw new Error("O type price precisa ser uma number")
    }
}