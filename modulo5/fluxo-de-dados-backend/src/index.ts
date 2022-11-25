import express from 'express'
import cors from 'cors'
import { Produto,produtos} from './data'

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3003,() => console.log("O servidor está rodando na porta 3003"))

// exercicio 1

app.get("/test",(req,res)=>{
    res.send("A API está funcionando!")
})

// exercicio 3

app.post("/produtos", (req,res)=>{
    try {
        const name = req.body.name
        const price = req.body.price

        if(!name || !price) {
            throw new Error("Campos obrigatório faltando: name ou price")
        }

        if(typeof name !== "string"){
            throw new Error("name deve ser uma string")
        }

        if(typeof price !== "number" || price <= 0) {
            throw new Error("price deve ser um número e maior que zero")
        }
        
        const newProduto: Produto = {
            id: Date.now().toString(),
            name,
            price
        }

        produtos.push(newProduto)
        res.send(produtos)
        
    } catch (error:any) {
        res.send(error.message)     
    }
})

// exercicio 4

app.get("/produtos",(req,res)=>{
    try {
        res.send(produtos)        
    } catch (error:any) {
        res.send(error.message)
    }
})

// exercicio 5

app.put("produtos/:id",(req,res)=>{
    try {
        const id = req.params.id
        const newPrice = req.body.price

        if(!newPrice && newPrice !== 0){
            throw new Error("está faltando o novo price")
        }
        
        if(typeof newPrice !== "number" || newPrice <= 0) {
            throw new Error("O price tem que ser numero e maior que zero ")
        }

        let isProduto = false

        for (let i = 0; i < produtos.length; i++) {
            if(produtos[i].id === id) {
                produtos[i].price = newPrice
                isProduto = true
            }
        }

        if(!isProduto) {
            throw new Error("Produto não encontrado")
        }

        res.send(produtos)

    } catch (error:any) {
        res.send(error.message)        
    }
})

