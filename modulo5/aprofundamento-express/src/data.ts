export type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export const todosAfazeres: ToDo[] = [
    {
      userId: 1,
      id: 11,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 2,
      id: 22,
      title: "quis ut nam facilis et officia qui",
      completed: true
    },
    {
      userId: 3,
      id: 33,
      title: "fugiat veniam minus",
      completed: false
    },
    {
        userId: 4,
        id: 44,
        title: "et porro tempora",
        completed: true
      }
]