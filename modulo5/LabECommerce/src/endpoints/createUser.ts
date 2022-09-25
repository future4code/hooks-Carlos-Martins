import { Request,Response } from "express"
import { User } from "../entidades/User"

class Id {
    execute = () => Date.now().toString()
}

export const createUser = (req:Request,res: Response ) => {
    try {
        const {name,email,age} = req.body
        const id = new Id().execute()

        const newUser = new User(
            id,
            name,
            email,
            age
        )

    } catch (error) {
        
    }
}