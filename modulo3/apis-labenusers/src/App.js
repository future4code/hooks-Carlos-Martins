import React from "react";
import axios from "axios";

class CriarCadastro extends React.Component {
  state = {
    name: "",
    email: ""
  };

  NameChange = event => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  EmailChange = event => {
    const newEmailValue = event.target.value;

    this.setState({ email: newEmailValue });
  };

  CreateUser = () => {
    const axiosConfig = {
      headers: {
        Authorization: "carlos"
      }
    };

    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Usuário ${this.state.name} criado com sucesso!`);
        this.setState({ name: "", email: "" });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Nome"
          type="text"
          value={this.state.name}
          onChange={this.NameChange}
        />
        <input
          placeholder="E-mail"
          type="email"
          value={this.state.email}
          onChange={this.EmailChange}
        />
        <button onClick={this.CreateUser}>Criar Usuário</button>
      </div>
    );
  }
}

export default CriarCadastro;