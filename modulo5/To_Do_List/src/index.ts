import app from "./app";
import { Request, Response } from 'express'
import connection from "./connection";
import { Usuario } from './types'

app.post('/user', async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body
        if (!name || !nickname || !email) {
            throw new Error("Passe o nome,apelido e email")
        }

        const novoUsuario: Usuario = {
            id: Number(Date.now()),
            name,
            nickname,
            email
        }

        await connection.raw(`
            INSERT INTO TodoListUser(id,name,nickname,email)
            VALUES(${novoUsuario.id},"${novoUsuario.name}","${novoUsuario.nickname}","${novoUsuario.email}")
        `)

        res.status(200).send("Usuário adicionado")

    } catch (error) {
        console.log(error)
        res.status(400)
    }

})


app.get('/user/:id', async (req: Request, res: Response) => {
    try {
        
        const id = Number(req.params.id)
        if (id) {
            const resultado = await connection.raw(`
            SELECT * FROM TodoListUser
            WHERE id = ${id};
            `)
            res.status(200).send(resultado[0])
        }

    } catch (error) {
        console.log(error)
        res.status(400)
    }
})

app.get('/user/all', async (req: Request, res: Response) => {
    try {
        const resultado = await connection.raw(`SELECT * FROM TodoListUser;`)
        res.status(200).send(resultado[0])
    } catch (error) {
        console.log(error)
        res.status(400)
    }
})

app.put('/user/edit/:id', async (req: Request, res: Response) => {

    try {
        const id = Number(req.params.id)
        const nickname = req.body.nickname
        const email = req.body.email

     await connection.raw(`
     UPDATE TodoListUser
     SET email = "${email}"
     WHERE id = ${id};
   `)

   res.status(200).send("email alterado")
    } catch (error) {
        console.log(error)
        res.status(400)
    }

})