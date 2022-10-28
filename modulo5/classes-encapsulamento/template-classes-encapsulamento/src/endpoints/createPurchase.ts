import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { Product } from "../models/Product"
import { Purchase } from "../models/Purchase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity
        const totalPrice = req.body.totalPrice

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const findUser = await connection(TABLE_USERS)
        .select()
        .where({ id: userId })

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const findProduct = await connection(TABLE_PRODUCTS)
        .select()
        .where({ id: productId })

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
       

        const newPurchase = new Purchase(id,userId,productId,quantity,totalPrice) 
        

        await connection(TABLE_PURCHASES).insert(newPurchase)

        res.status(201).send({ message: "Compra registrada", purchase: newPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}