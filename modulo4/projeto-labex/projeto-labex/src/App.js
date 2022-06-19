import React from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CriarViagemPage from "./pages/CriarViagemPage/CriarViagemPage"
import DetalhesdaViagemPage from "./pages/DetalhesDaViagemPage/DetalhesDaViagemPage"
import HomePage from "./pages/HomePage/HomePage"
import InscricaoPage from "./pages/InscricaoPage/InscricaoPage"
import ListaDeViagemPage from "./pages/ListaDeViagemPage/ListaDeViagemPage"
import LoginPage from "./pages/LoginPage/LoginPage"



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/criarViagem">
            <CriarViagemPage/>
          </Route>
          <Route path="/detalhesDaViagem">
            <DetalhesdaViagemPage/>
          </Route>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/inscricao">
            <InscricaoPage/>
          </Route>
          <Route path="lista">
            <ListaDeViagemPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>          
        </Switch>
      </div>
    </Router>
  )
}

export default App
