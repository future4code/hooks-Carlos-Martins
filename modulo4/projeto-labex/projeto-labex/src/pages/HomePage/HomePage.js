import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const ButtonContainer = styled.div`
 display:grid;
 grid-auto-flow:column;
 gap:16px;
`

function HomePage() {
    return (
        <div>
            <h1 align={'center'}>LabeX</h1>
            <ButtonContainer >
                <Link to = {"/Login"}>
                  <button>àrea do Administrador</button>
                </Link>
                <Link to = {"/inscricao"}>
                   <button>Cadastro</button>
                </Link>
                
            </ButtonContainer >

        </div>
    )
}

export default HomePage