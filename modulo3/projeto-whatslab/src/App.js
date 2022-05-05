
import React from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 650px;
  margin: auto;
  display: flex;
  flex-direction: column;
 
`

const MsgContainer = styled.div`
  flex-grow: 1;
  padding:30px
  display: flex;
  flex-direction: column-reverse ;

`

const InputContainer = styled.div`
  display: flex;
  border: 1px solid gray;
`

const NomeInput = styled.input`
  width: 110px;
`

const MessagemInput = styled.input`
  flex-grow: 1;
`

class App extends React.Component {
  
 state = {
   mensagens: [],
   usuarioValue: '',
   mensagemValue: ''
 }

  onChangeUsuarioValue = (event)=> {
    this.setState({usuarioValue: event.target.value})
  }

  onChangeMensagemValue = (event)=> {
    this.setState({mensagemValue: event.target.value})
  }


  enviar = () => {
      const novaMensagem = {
      usuario: this.state.usuarioValue,
      texto:this.state.mensagemValue
    }

    const novaMensagemArray = [novaMensagem,...this.state.mensagens]
    this.setState({mensagens:novaMensagemArray,mensagemValue:''})
  }
  render() {
    
    return (
      <AppContainer>
        <MsgContainer>
          {this.state.mensagens.map((mensagem,index) => {
            return <p key={index}>
              <strong>{mensagem.usuario}</strong>:{mensagem.texto}
            </p>
          })}
        </MsgContainer>
        <InputContainer>
          <NomeInput onChange={this.onChangeUsuarioValue} value={this.state.usuarioValue} placeholder={'Nome'}/>
          <MessagemInput onChange={this.onChangeMensagemValue} value={this.state.mensagemValue} placeholder={'Mensagem'}/>
          <button onClick={this.enviar}>Enviar</button>
        </InputContainer>       
      </AppContainer>
    );
  }
}

export default App;
