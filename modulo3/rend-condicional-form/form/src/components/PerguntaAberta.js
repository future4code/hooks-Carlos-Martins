import React from "react"

class PerguntaAberta extends React.Component {
    render(){
        return(
            <div>
                <p>{this.props.pergunta}</p>
                <input onChange={this.props.onChange} value={this.props.value}/>
            </div>
        )
    }
}

export default PerguntaAberta