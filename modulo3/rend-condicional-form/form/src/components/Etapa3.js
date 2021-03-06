import React from "react"
import PerguntaAberta from "./PerguntaAberta"
import PerguntaFechada from "./PerguntaFechada"

class Etapa3 extends React.Component {
    render(){
        return(
            <div>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"}/>
                 <PerguntaFechada pergunta={"6. Você fez algum curso complementar?"} opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]} />
            </div>
        )
    }
}

export default Etapa3