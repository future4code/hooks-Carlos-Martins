import connection from "./connection";

const criarTabelaUsuarios = async () => {
    try {
        await connection.raw(`
        CREATE TABLE TodoListUser (
        id VARCHAR(255) PRIMARY KEY, 
        name VARCHAR(255) NULL, 
        nickname VARCHAR(255) UNIQUE NOT NULL, 
        email VARCHAR(255) UNIQUE NOT NULL
    );
        `)

        console.log("Tabela Usuarios criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Usuarios.")
        
    }
}

async function popularTabelaUsuarios() {
    try {
        await connection.raw(`
            INSERT INTO TodoListUser (id, name, nickname, email)
            VALUES 
            (1, "Augusto", "guto", "guto@labenu.com"),
            (2, "Roberto", "beto", "beto@labenu.com"),
            (3, "Jose","ze", "ze@labenu.com")
        `)
        
        console.log("Tabela Usuarios populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela Usuarios.")
        
    }
}

criarTabelaUsuarios()
.then(() => popularTabelaUsuarios())
.finally(() => process.exit())