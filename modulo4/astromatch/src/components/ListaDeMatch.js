import React, { useEffect, useState } from "react";
import ItemMatchList from "./ItemMatchList";
import styled from "styled-components"
import axios from "axios";

const ListaDeMatchContainer = styled.div`
 padding: 10px;
 

`
function ListaDeMatch(){
    const[matches,setMatches] = useState([])

    useEffect(()=>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:guto/matches').then((response)=>{
            console.log(response.data.matches)
            setMatches(response.data.matches)
        })
    },[])
    return(
        <ListaDeMatchContainer>
            {matches.map((profile)=>{
                return <ItemMatchList profile = {profile}/>
            })}
        </ListaDeMatchContainer>
    )
}

export default ListaDeMatch