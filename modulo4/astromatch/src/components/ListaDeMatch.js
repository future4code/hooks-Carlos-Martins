import React, { useEffect , useState } from "react"
import ItemMatchLista from "./ItemMatchLista"
import styled from "styled-components"
import axios from "axios"

const ListaDeMatchContainer = styled.div`
 padding: 8px;

`


function ListaDeMatch() {

    const[matches,setMatches] = useState([])

   

      useEffect(()=>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guto/matches').then((response)=>{
            setMatches(response.data.matches)
        })
      },[])

    return(
        <ListaDeMatchContainer >
            {matches.map((profile)=>{
                return <ItemMatchLista profile={profile}/>
            })}
        </ListaDeMatchContainer >
    )
}

export default ListaDeMatch