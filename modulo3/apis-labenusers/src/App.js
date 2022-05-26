import React from "react";
import Lista from "./components/Lista";
import Cadastro from "./components/Cadastro";

class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }
  irParaCadastro = () => {
    this.setState({telaAtual:"cadastro"})  
  }

  irParaLista = () => {
    this.setState({telaAtual:"lista"})
  }
  escolhaTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <Cadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <Lista irParaCadastro={this.irParaCadastro}/>
      default:
        return <p>Erro! Página não encontrada</p>
    }
  }


  render(){
    return(
      <div>
        {this.escolhaTela()}
      </div>
    )
  } 
}

export default App;