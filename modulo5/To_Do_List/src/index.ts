import app from "./app";
import { Request, Response } from 'express'
import connection from "./connection";

app.get('/user/all', async (req: Request, res: Response) => {
    try {
        const resultado = await connection.raw(`SELECT * FROM TodoListUser;`)
        res.status(200).send(resultado[0])
    } catch (error) {
        console.log(error)
        res.status(400)
    }
})

app.get('/user/:id', async (req: Request, res: Response) => {
    try {
        const busca = req.query.busca
        if(busca) {
            const resultado = await connection.raw(`
            SELECT * FROM TodoListUser
            WHERE id = ${busca}
            `)
            res.status(200).send(resultado[0])
        }
        
    } catch (error) {
        console.log(error)
        res.status(400)
    }
})

app.post('/user', async (req:Request, res: Response)=>{
    try {
        const {name,nickname,email} = req.body
        if(!name || !nickname || !email) {
            throw new Error("Passe o nome,apelido e email")
        }

        const novoUsuario 

    } catch (error) {
        console.log(error)
        res.status(400)
    }

})
