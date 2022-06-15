import React, { useEffect, useState } from "react";
import CartaoProfile from "./CartaoProfile";
import EscolherBotao from "./EscolherBotao";
import axios from "axios";

function EscolherProfile() {
    const[perfilParaEscolher,setPerfilParaEscolher] = useState({})

    const getPerfilParaEscolher = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:guto/person').then((response)=>{
            console.log(response.data.profile)
            setPerfilParaEscolher(response.data.profile)     
         })
    }
   

    useEffect(()=>{
       getPerfilParaEscolher()
    },[])

    const onClickDiscurtir = () => {
        const body = {
            choice: false,
            id: perfilParaEscolher.id
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:guto/choose-person',body).then((response)=>{
            console.log(response)
            getPerfilParaEscolher()
        })
    }

    const onClickCurtir = () => {
        const body = {
            choice: true,
            id: perfilParaEscolher.id
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:guto/choose-person',body).then((response)=>{
            console.log(response)
            getPerfilParaEscolher()
        })
    }
  
     return(
        <div>
            <CartaoProfile profile={perfilParaEscolher}/>
            <EscolherBotao onClickDiscurtir={onClickDiscurtir} onClickCurtir={onClickCurtir}/>
        </div>
    )
}

export default EscolherProfile