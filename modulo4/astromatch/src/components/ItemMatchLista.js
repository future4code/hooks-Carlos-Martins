import React from "react";
import styled from "styled-components"

const ListaDeMatchContainer = styled.div`
display: flex ;
align-items: center;
border-bottom: 1px solid gray;

:hover {
  background-color:  rgba(0,0,0,0.1);
} 
`
const FigCircular = styled.img`
 border-radius: 50px;
 margin-right: 8px;
 height: 30px;
 width: 30px;
`

function ItemMatchLista(props){

    return(
        <ListaDeMatchContainer>
            <FigCircular src = {props.profile.photo}/>
            <p>{props.profile.name}</p>
        </ListaDeMatchContainer>
    )
}

export default ItemMatchLista