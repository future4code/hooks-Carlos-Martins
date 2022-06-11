import  axios  from "axios";
import React, { useEffect, useState } from "react";
import CartaoProfile from "./CartaoProfile";
import EscolherBotao from "./EscolherBotao";






function EscolherProfile(){

    const [perfilParaSerEscolhido,setPerfilParaSerEscolhido] = useState({})

    const getEscolherProfile = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guto/person').then((response)=>{
             setPerfilParaSerEscolhido(response.data.profile)
          })
    }
    

      useEffect(()=>{
         getEscolherProfile() 
      },[])

    const onClickNaoCurtir = () => {
        const body = {
            choice: false,
            id: perfilParaSerEscolhido.id
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guto/choose-person',body).then((response)=>{
           console.log(response)
           getEscolherProfile() 
        }) 
    }

    const onClickCurtir = () => {
        const body = {
            choice: true,
            id: perfilParaSerEscolhido.id
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guto/choose-person',body).then((response)=>{
            console.log(response)
           getEscolherProfile()

        })
    }
    

  return(
      <div>
          <CartaoProfile profile = {perfilParaSerEscolhido}/>
          <EscolherBotao onClickNaoCurtir={onClickNaoCurtir} onClickCurtir={onClickCurtir} />
      </div>
  )

}

export default EscolherProfile