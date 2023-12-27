import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

const Home = ( ) => {
  return (
    <div className='div-principal-home'>
      <div className='title-subtilte'>
        <h1 className='h1-home'>Seja bem-vindo(a) ao DivertQuiz! </h1>
        <p className='home-subtitle'>
          Se prepare para quebrar a cabeça e responder as perguntas mais difíceis sobre todos os assuntos que você conhece (ou pensa que conhece), escolha 
          a categoria de sua preferência e se divirta!
       </p>
      </div>  
      <Link className='link' to="/category">Começar</Link>
    </div>
  );
}

export default Home;