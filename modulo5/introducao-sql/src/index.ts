import express from 'express'
import cors from 'cors'
import connection from './connection'


const app = express()
app.use(express.json())
app.use(cors())

/*----------------------- exercicio 1 --------------------------------*/

app.get("/usuarios", async (req, res) => {
    let errorCode = 400
    try {

        const busca = req.query.busca

        if (busca) {
            const resultado = await connection.raw(`
               SELECT * FROM Users
               WHERE nome = "${busca}";
            `)

            res.status(200).send(resultado[0])
        }

        const resultado = await connection.raw(`
          SELECT * FROM Users;
        `)
        res.status(200).send(resultado[0])
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

/*----------------------- exercicio 2 ----------------------------------*/

app.post("/usuarios", async (req, res) => {
    try {
        const { nome, email } = req.body

        if (!nome || !email) {
            throw new Error("Passe o nome e o email")
        }

        if (nome.length < 4) {
            throw new Error("O nome deve ter 4 letras.")
        }

        if (!email.includes("@")) {
            throw new Error("E-mail invalido!")
        }

        const novoUser = {
            id: Date.now(),
            nome: nome,
            email: email
        }

        await connection.raw(`
      INSERT INTO Users (id, nome, email)
      VALUES (${novoUser.id}, "${novoUser.nome}", "${novoUser.email}")
    `)

        res.send(`As informações do novo usuário foram incluidas com sucesso!!!`)

    } catch (error) {
        res.send(error.message)
    }

})


/*----------------------- exercicio 3 ----------------------------------*/

app.put("/usuario/:id", async (req, res) => {
    let errorCode = 400

    try {
        const id = Number(req.params.id)
        const email = req.body.email

        if (!id || id === null) {
            throw new Error("id não encontrado")
        }

        if (email.length === 0) {
            throw new Error("não possui endereço de email")
        }

        if (typeof email !== "string") {
            throw new Error('Tipo invalido')
        }

        if (!email.includes("@")) {
            throw new Error("E-mail invalido!")
        }

        const usuario = await connection.raw(`
      SELECT * FROM Users
      WHERE id = ${id}
  `)

        const usuarioEncontrado = usuario[0]

        if (!usuarioEncontrado) {
            errorCode = 400
            throw new Error("usuario não encontrado")
        }

        await connection.raw(`
      UPDATE Users
      SET email = "${email}"
      WHERE id = ${id};
`)


        res.send({ mensagem: `O email foi alterado para ${email}` })
    } catch (error) {
        res.send({ messagem: error.message })

    }
})

/*----------------------- exercicio 4 ----------------------------------*/

app.delete("/usuario/:id",async(req,res)=>{
    let errorCode = 400
    try {
      const id = Number(req.params.id)

      const usuarioDeletar = await connection.raw(`
        SELECT * FROM Users
        WHERE id = ${id};
      `)

      if (usuarioDeletar[0].length === 0){
        throw new Error("Usuario não encontrado")
      }

      await connection.raw(`
      DELETE FROM Users
      WHERE id = ${id};
    
    `)

    res.status(200).send("Usuario deletado!")
        
    } catch (error) {
       res.status(errorCode).send(error.messsage) 
    }


})



app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})