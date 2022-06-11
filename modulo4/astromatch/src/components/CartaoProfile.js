import React  from "react";
import styled from "styled-components"

const CartaoProfileContainer = styled.div`
 margin: 16px;
 border: 1px solid black;
 
`
const Img = styled.img`
 width: 100%;
 display:block;
 max-height: 370px ;
`

const Informacao = styled.div`
 padding: 0 16px;

`

function CartaoProfile(props){
    return(
        <CartaoProfileContainer>
            <Img src={props.profile.photo}/>
            <Informacao>
            <p>{props.profile.name}, {props.profile.age}</p>
            <p>{props.profile.bio}</p>
            </Informacao>
        </CartaoProfileContainer>
    )
}
export default CartaoProfile