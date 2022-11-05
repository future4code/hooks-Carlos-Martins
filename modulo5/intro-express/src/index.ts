import express from 'express'
import { Request,Response } from 'express';
import cors from 'cors'
import { users } from './data';

const app = express();
app.use(cors())

app.use(express.json());

app.listen(3003, () => console.log("Servidor rodando na porta 3003"))


app.get("/", (req: Request, res: Response) => {          
    res.send("Hello from Express")
})

app.get("/users",(req:Request,res: Response)=>{
    res.send(users)
})