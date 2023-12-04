import './Navbar.css'
import {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ( ) => {

  return (
    <div className='navbar'>
        <h1>Diverte Quiz</h1>
        <p className='subtitle-p'>Hey, explorador de curiosidades! Está pronto para mergulhar no mundo dos quizzes mais épicos? Junte-se à diversão, 
            desafie sua mente e descubra o que você realmente sabe (ou não)! Para participar bastar criar o seu cadastro e fazer o seu login.</p>

        <nav>
            <ul>
                <NavLink to="/">Página inicial</NavLink>
                <NavLink to="/about">Sobre</NavLink>
                <NavLink to="/register">Criar cadastro</NavLink>
                <NavLink to="/signin">Entrar</NavLink>
            </ul>
        </nav>
      
    </div>
  );
}

export default Navbar;