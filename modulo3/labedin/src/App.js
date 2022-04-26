import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://st3.depositphotos.com/6633222/16094/v/950/depositphotos_160949108-stock-illustration-cute-little-boy-cartoon.jpg" 
          nome="Carlos Augusto Martins" 
          descricao="Oi, eu sou o Carlos.Eu sou formado em engenharia eletrônica pela UTFPR e atualmente sou aluno de dev fullstack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://coresul.com.br/wp-content/uploads/2020/10/dataprom-logo.jpg" 
          nome="Dataprom" 
          descricao="Estagio em desenvolvimento de sinaleiros e radares!" 
        />
        
        <CardGrande 
          imagem="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg" 
          nome="Google" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
