export class User {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly age: number
    ) {
        if(typeof id !== "string") throw new Error("O type id precisa ser uma string")
        if(typeof name !== "string") throw new Error("O type name precisa ser uma string")
        if(typeof email !== "string") throw new Error("O type email precisa ser uma string")
        if(typeof age !== "number") throw new Error("O type age precisa ser uma number")
    }
}