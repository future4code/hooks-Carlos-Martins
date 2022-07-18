import React from "react";
import axios from "axios"
import { BASE_URL } from "../../constants/urls";
import { CharacterCard } from "./styled";


class CharacterListPage extends React.Component {
    state = {
        charactersList: []
    }

    componentDidMount(){
        this.getCharacterList()
    }


    getCharacterList = () => {
        axios.get(`${BASE_URL}/people`)
        .then((res) => this.setState({charactersList: res.data.results}))
        .catch((err)=> console.log(err.response))
    }
    
    

   render(){
    const characters = this.state.charactersList.map((person)=>{
        return <CharacterCard 
        key={person.name}
        onClick={()=> this.props.goToDetailPage(person.url)}
        >{person.name}</CharacterCard>
    })

    
    return<div>{characters}</div>
   }
} 

export default CharacterListPage

