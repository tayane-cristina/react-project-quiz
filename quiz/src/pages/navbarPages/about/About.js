import React from 'react';
import './About.css'

const About = ( ) => {
  return (
    <div className='div-principal-about'>
      <h1>Sobre a página</h1>
      <p className='text'>Está página foi desenvolvida por <a href='https://github.com/tayane-cristina' rel='noreferrer' target="_blank" className='hidden-link special-word'>Tayane Cristina</a>, e tem em vista um quiz divertido e dinâmico
      dentro de uma página autênticada onde você pode guardar os seus históricos de pontuação, está página foi criada em React, estilizada sem o uso de bibliotecas
      e autenticada pelo Firebase, uma plataforma de desenvolvimento de aplicações moveis e da web. Divirta-se!</p>
    </div>
  );
}

export default About;