import React from "react";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";


class App extends React.Component {
  state = {
    currentScreen: "list",
    clickedCharacterUrl: ""
  }

  goToDetailPage = (url) => {
    this.setState({currentScreen: "detail",clickedCharacterUrl: url})
  }

  goToList = (url) => {
    this.setState({currentScreen: "list",clickedCharacterUrl: ""})
  }
  selectPage = () => {
    switch (this.state.currentScreen) {
      case "list":
        return <CharacterListPage goToDetailPage={this.goToDetailPage}/>
      case "detail":
        return <CharacterDetailPage goToList ={this.goToList}url={this.state.clickedCharacterUrl}/>
      default:
        return <CharacterListPage goToDetailPage={this.goToDetailPage}/>
    }
  }
  render() {
    return (
      <div>
        {this.selectPage()}
      </div>
    );
  }
}

export default App;
