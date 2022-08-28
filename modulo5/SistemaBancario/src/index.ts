import express,{Express,Request,Response} from "express"
import cors from "cors"
import {contas} from "./types"
const app: Express = express()
app.use(express.json())
app.use(cors())

app.post("/users/criar",(req:Request,res:Response)=>{
    try {
        const {nome, CPF, DataDeNascimento} = req.body
        const [dia,mes,ano] = DataDeNascimento.split('/')
        const dataDeNascimento: Date = new Date(`${dia}/${mes}/${ano}`)

        contas.push({
            nome,
            CPF,
            dataDeNascimento,
            saldo: 0,
            extrato: []
        })
        res.status(201).send("Conta foi criada com sucesso!")

    } catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})

app.get("/users/contas",(req:Request,res:Response)=>{
    try {

        res.status(200).send(contas)
    } catch(error){
        res.send(error)
    }
})

app.listen(3003,()=>{
    console.log("Servidor rodando na porta 3003")
})