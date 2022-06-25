import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"

import CriarViagemPage from "./pages/CriarViagemPage/CriarViagemPage"
import DetalhesdaViagemPage from "./pages/DetalhesDaViagemPage/DetalhesDaViagemPage"
import HomePage from "./pages/HomePage/HomePage"
import InscricaoPage from "./pages/InscricaoPage/InscricaoPage"
import ListaDeViagemPage from "./pages/ListaDeViagemPage/ListaDeViagemPage"
import LoginPage from "./pages/LoginPage/LoginPage"

const AppContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  padding:16px;
`


function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>

          <Route path="/criarViagem" element={<CriarViagemPage />} />
          <Route path="/detalhesDaViagem" element={<DetalhesdaViagemPage />} />
          <Route index element={<HomePage />} />
          <Route path="/inscricao" element={<InscricaoPage />} />
          <Route path="/lista" element={<ListaDeViagemPage />} />
          <Route path="/login" element={<LoginPage />} />


        </Routes>
      </BrowserRouter>
    </AppContainer>


  )
}

export default App
