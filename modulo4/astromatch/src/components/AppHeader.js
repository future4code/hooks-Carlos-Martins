import React from "react";
import styled from "styled-components"

const AppHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  align-items:center;
  padding: 0 10px ;

`

function AppHeader(props){
    return(
        <AppHeaderContainer>
            <button onClick={props.irEscolher}>Escolher</button>
            <p>astromatch</p>
            <button onClick={props.irLista}>Lista</button>
        </AppHeaderContainer >
    )
}

export default AppHeader