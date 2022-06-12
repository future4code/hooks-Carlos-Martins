import React, { useState } from "react";
import AppHeader from "./AppHeader";
import EscolherProfile from "./EscolherProfile";
import styled from "styled-components"
import ListaDeMatch from "./ListaDeMatch";

const MainContainer = styled.div`
 border: 1px solid black;
 width: 400px;
 height: 650px;
 border-radius: 4px;
 margin: 35px;
 display: flex;
 flex-direction: column;
`

function Main(){
    const [selecionar,setSelecionar] = useState('escolher')

    const renderSelecionar = () => {
        switch(selecionar){
            case 'escolher':
              return <EscolherProfile/>
            case 'lista':
              return <ListaDeMatch/>
            default:
              return <EscolherProfile/>
        }
    }
    
    const irEscolher = () => {
        setSelecionar('escolher')
    }

    const irLista = () => {
        setSelecionar('lista')
    }
    return(
        <MainContainer>
            <AppHeader irEscolher={irEscolher} irLista={irLista}/>
            {renderSelecionar()}
        </MainContainer>
    )
}

export default Main