const tasks = [
  "Lavar a louça",
  "Comprar leite",
  "Estudar"
]

const task = process.argv[2]


tasks.push(task)

console.log(`Task ${task} foi adicionada com sucesso!`)
console.log("tasks:", tasks.toString())