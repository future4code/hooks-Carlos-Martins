// type para tipar no typescript com camelCase
/*
export type Purchase = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}
*/
// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}

export class Purchase {
    public id: string
    public userId: string
    public productId: string
    public quantity: number
    public totalPrice: number

    constructor(id: string, userId: string, productId: string, quantity: number, totalPrice: number){
        this.id = id,
        this.userId = userId,
        this.productId = productId,
        this.quantity = quantity,
        this.totalPrice = totalPrice
    }
}