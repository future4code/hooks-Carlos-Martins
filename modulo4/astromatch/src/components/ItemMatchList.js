import React from "react"
import styled from "styled-components"

const ItemMatchListContainer = styled.div`
  display: flex;
  align-items:center;
  border-bottom: 1px solid black;
`
const ImgRedonda = styled.img`
 border-radius: 50%;
 margin-right: 8px ;
 height: 30px;
 width: 30px;

`
function ItemMatchList(props){
    return(
        <ItemMatchListContainer>
            <ImgRedonda src={props.profile.photo}/>
            <p>{props.profile.name}</p>
        </ItemMatchListContainer>
    )
}

export default ItemMatchList