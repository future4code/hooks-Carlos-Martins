import axios from "axios";
import React from "react";

class CharacterDetailPage extends React.Component {
    state = {
        character: {},
        planet: ""
    }

    componentDidMount() {
        this.getCharacter()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.character !== prevState.character) {
            this.getPlanet()
        }

    }

    getCharacter = () => {
        axios.get(this.props.url)
            .then((res) => this.setState({ character: res.data }))
            .catch((err) => console.log(err.response))
    }

    getPlanet = () => {
        axios.get(this.state.character.homeworld)
            .then((res) => this.setState({ planet: res.data.name }))
            .catch((err) => console.log(err.response))

    }

    render() {
        
        return (<div>
            {this.state.character.name && this.state.planet ?
                (
                    <div>
                        <p>Nome: {this.state.character.name}</p>
                        <p>Planeta Natal: {this.state.planet}</p>
                    </div>
                ) : <p>Carregando ...</p>

        }

            <button onClick={this.props.goToList}>Lista</button>
        </div>
    )
    }
}

export default CharacterDetailPage