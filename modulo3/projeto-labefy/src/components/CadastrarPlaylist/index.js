import React from "react";
import styled from "styled-components";
import axios from "axios"
import { baseUrl, axiosConfig } from "../../constants";

const PlaylistContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PlaylistForm = styled.form`   
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

class CadastrarPlaylist extends React.Component {
    state = {
        inputNameValue: ""
    }

    changeInputnameValue = (e) => {
        this.setState({inputNameValue: e.target.value})
    }

    createPlaylist = (e) => {
        e.preventDefault();
        const body = {
            name: this.state.inputNameValue
        };

        axios.post(baseUrl, body, axiosConfig).then(() => {
            alert('Playlist cadastrada com sucesso')
        }).catch(err => [
            console.log(err)
        ]);
        this.setState({inputNameValue: ""});
    };
    
    render () {
        return (
            <PlaylistContainer>
                <h1>Cadastrar Playlist</h1>
                <PlaylistForm onSubmit={this.createPlaylist} >
                    <label>Nova playlist</label>
                    <input 
                        placeholder="Nome da Playlist"
                        type="text"
                        value={this.state.inputNameValue}
                        onChange={this.changeInputnameValue}
                    />
                    <button type="submit">Cadastrar Playlist</button>
                </PlaylistForm>
            </PlaylistContainer>
        );
    };
};

export default CadastrarPlaylist