import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardUsuario = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content:space-between ;

`

export default class Lista extends React.Component{

    staste = {
        listaUsuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }



    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const headers = {
            headers: {
                Authorization:"carlos-martins-hooks"
            }
        }

        axios.get(url,headers)
        .then((response)=>{
            this.setState({listaUsuarios: response.data})
            console.log(this.state.listaUsuarios)       
        })
        .catch((error)=>{
            alert("Algo deu errado")
        })
    }

    render(){
        
        const usuarios = this.state.listaUsuarios.map((usuario)=> {
            return(
                <CardUsuario key={usuario.id}>
                    {usuario.name}
                    <button>X</button>
                </CardUsuario>
            )

        })
        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h3>Lista de Usuários</h3>
                {usuarios}
            </div>
        )
    }
}

