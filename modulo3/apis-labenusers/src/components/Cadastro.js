import axios from "axios";
import React from "react";

 export default class Cadastro extends React.Component{
    state = {
        nome: "",
        email:""
    }

    leNome = (event) => {
        this.setState({nome: event.target.value})
    }
    
    leEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
       const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

       const body = {
           name: this.state.nome,
           email: this.state.email
       }

       const headers = {
           headers: {
               Authorization: "carlos-martins-hooks"
           }
       }

       axios.post(url,body,headers)
       .then((response) => {
           alert("Usuário criado com sucesso")
           this.setState({nome: "",email:""})
       })
       .catch((error) => {
           alert(error.response.data.message)
       })
    }

   render(){
       return(
          <div>
              <button onClick={this.props.irParaLista}>Ir para Lista</button>
              <h3>Cadastro</h3>
              <input 
                  placeholder="Nome" 
                  value={this.state.nome}
                  onChange={this.leNome}
               />
              <input 
                  placeholder="E-mail"
                  value={this.state.email}
                  onChange={this.leEmail} 
               />
              <button onClick={this.fazerCadastro}>Cadastrar</button>
          </div>
       )
   }
 }


