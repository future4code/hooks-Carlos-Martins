import express from 'express'
import { Request,Response } from 'express';
import cors from 'cors'
import { users,posts } from './data';

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

app.get("/posts",(req:Request,res: Response)=>{
    res.send(posts)
})

app.get("/users/:useId/posts",(req:Request,res:Response)=> {
    const userId = Number(req.params.userId)

    const result = posts.filter(post => {
        if(post.userId === userId){
            return true
        } else {
            return false
        }

    })

    res.send(result)
    
})