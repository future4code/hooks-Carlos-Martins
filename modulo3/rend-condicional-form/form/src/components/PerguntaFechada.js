import React from "react"

class PerguntaFechada extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.pergunta}</p>
                <select>{this.props.opcoes.map(opcao => (
          <option value={opcao}>{opcao}</option>
        ))}
                </select>
            </div>
        )
    }
}

export default PerguntaFechada
