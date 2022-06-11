import React from "react";
import styled from "styled-components"

const EscolherBotaoContainer = styled.div`
 display: flex;
 justify-content: space-around ;

`



function EscolherBotao(props){

    return(
        <EscolherBotaoContainer>
            <button onClick={props.onClickNaoCurtir()}>não curtir</button>
            <button onClick={props.onClickCurtir()}>curtir</button>
        </EscolherBotaoContainer>
    )
}

export default EscolherBotao