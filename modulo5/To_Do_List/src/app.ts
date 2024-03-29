import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'


const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen(3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log("Server is running in 3003")
    } else {
        console.log( "erro no server")
    }
    
})

export default app