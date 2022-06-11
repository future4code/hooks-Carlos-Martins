import React, { useState } from "react";
import AppHeader from "./AppHeader";
import EscolherProfile from "./EscolherProfile";
import ListaDeMatch from "./ListaDeMatch";
import styled from "styled-components"

const MainContainer = styled.div`
 border: 1px solid black;
 border-radius: 3px;
 width: 400px;
 height: 600px;
 margin: 30px;
 display:flex;
 flex-direction: column;
`

function Main() {
    const [selecionarPagina,setSelecionarPagina] = useState('profile')

    const renderSelecionarPagina = () => {
        switch(selecionarPagina){
            case 'profile':
                return <EscolherProfile/>
            case 'lista' :
                return <ListaDeMatch/>
            default:
                return <EscolherProfile/>
        }
    }

    const irEscolherProfile = () => {
        setSelecionarPagina('profile')
    }

    const irListaDeMatch = () => {
        setSelecionarPagina('lista')
    }
    return(
        <MainContainer>
            <AppHeader irEscolherProfile={irEscolherProfile} irListaDeMatch = {irListaDeMatch}/>
            {renderSelecionarPagina()}
        </MainContainer>
    )
}

export default Main