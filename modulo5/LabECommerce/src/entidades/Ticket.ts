import Product from "./Product";




export class Ticket extends Product {
  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    readonly origin: string,
    readonly destination: string
  ){
    super(id,name,description,price)

    if(typeof origin !== "string") throw new Error("O type origin precisa ser uma string")
    if(typeof description !== "string") throw new Error("O type description precisa ser uma string")
  }
}