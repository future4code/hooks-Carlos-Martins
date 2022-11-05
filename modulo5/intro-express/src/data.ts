

export type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: String
}

export const users: User[] = [
    {
        id: 1,
        name: "Pedro Jose",
        phone: "41-9995-7869",
        email: "pedro@labenu.com",
        website: "pedro.net",
    },
    {
        id: 2,
        name: "Jose Pedro",
        phone: "41-9445-7349",
        email: "jose@labenu.com",
        website: "jose.net",
    },
    {
        id: 3,
        name: "Maria Jose",
        phone: "42-9555-3456",
        email: "maria@labenu.com",
        website: "maria.net",
    },
]