import express from "express"
import cors from "cors"
import { ToDo, todosAfazeres } from "./data"


const app = express()
app.use(cors())
app.use(express.json())

app.listen(3003,()=>{
    console.log("o servidor está rodando na porta 3003")
})

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

// exercicio 4
app.get("/afazeres/completed/:isCompleted", (req, res) => {
    let isCompleted: any = req.params.isCompleted
  
    if (isCompleted === "true") {
      isCompleted = true
    } else if (isCompleted === "false") {
      isCompleted = false
    } 
  
    const result = []
  
    for (let i = 0; i < todosAfazeres.length; i++) {
      if (todosAfazeres[i].completed === isCompleted) {
        result.push(todosAfazeres[i])
      }
    }
  
    res.send(result)
  })

  // exercicio 5

  app.post("/afazeres", (req, res) => {
    const userId = req.body.userId
    const title = req.body.title
    const completed = req.body.completed
  
    const novoTodo: ToDo = {
      userId,
      id: Date.now(),
      title,
      completed
    }
  
    todosAfazeres.push(novoTodo)
  
    res.send(todosAfazeres)
  })

   // exercicio 6

  app.put("/todosAfazeres/:id/completed", (req, res) => {

    const id = Number(req.params.id)
  
    for (let todosAfazer of todosAfazeres) {
      if (todosAfazer.id === id) {
        todosAfazer.completed = !todosAfazer.completed
      }
    }
  
    res.send(todosAfazeres)
  })

  // exercicio 7

  app.delete("/todosAfazeres/:id",(req,res)=>{
    const id = Number(req.params.id)

    for(let i = 0; i < todosAfazeres.length; i++){
        if(todosAfazeres[i].id === id) {
            todosAfazeres.splice(i,1)
        }
    }

    res.send(todosAfazeres)
  })

   // exercicio 8

   app.get("/users/:userId/todosAfazeres",(req,res)=>{
    const userId = Number(req.params.userId)
    const result = []

    for(let todoAfazer of todosAfazeres){
        if(todoAfazer.userId === userId) {
            result.push(todoAfazer)
        }
    }
    res.send(result)
   })