import React from "react";
import styled from "styled-components"

const AppHeaderContainer = styled.div`
 display: flex;
 justify-content: space-between ;
 border-bottom: 1px solid lightgrey ;
 align-items: center;
 padding: 0 8px ;

`

function AppHeader(props){

    return(
        <AppHeaderContainer>
            <button onClick={props.irEscolherProfile}>Escolher</button>
            <p>Astromatch</p>
            <button onClick={props.irListaDeMatch}>Lista</button>
        </AppHeaderContainer>
    )
}

export default AppHeader