
import connection from "./connection";

const criarUsarios = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Users (
            id BIGINT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
            );
        `)
        console.log("Tabela de Usuário criado com sucesso!")
    } catch (error) {
        console.log("Erro ao criar tabela de usuário")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaUsuarios() {
    try {
        await connection.raw(`
             INSERT INTO Users (id,nome,email)
             VALUES
             (1,"Carlos","carlos@labenu.com"),
             (2,"Augusto","augusto@labenu.com"),
             (3,"Guto","guto@labenu.com"),
             (4,"Joao","joao@labenu.com"),
             (5,"Pedro","pedro@labenu.com");
        `)
        console.log("Usuarios criados coom sucesso!")
    } catch (error) {
        console.log("Erro ao popular tabela Users")
        console.log(error.sqlMessage)
        
    }
}

criarUsarios()
.then(()=>popularTabelaUsuarios())
.finally(()=> process.exit())