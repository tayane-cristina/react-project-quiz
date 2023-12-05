import './Navbar.css'
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthenticator } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

const Navbar = ( ) => {

  const {logout} = useAuthenticator()
  const {user} = useAuthValue()


  return (
    <div className='navbar'>
        <h1>Diverte Quiz</h1>
        <p className='subtitle-p'>Hey, explorador de curiosidades! Está pronto para mergulhar no mundo dos quizzes mais épicos? Junte-se à diversão, 
            desafie sua mente e descubra o que você realmente sabe (ou não)! Para participar bastar criar o seu cadastro e fazer o seu login.</p>

        <nav>
            <ul>
              <NavLink to="/">Página inicial</NavLink>
              <NavLink to="/about">Sobre</NavLink>
              {!user && 
              <>
                <NavLink to="/register">Criar cadastro</NavLink>
                <NavLink to="/signin">Entrar</NavLink>
              </>
              }
              {user && 
              <>
                <NavLink to="/category">Categorias</NavLink>
                <NavLink to="/createQuiz">Criar quiz</NavLink>
                <button className='btn-navbar' onClick={logout}>Sair</button>
              </>
              }   
            </ul>
        </nav>
      
    </div>
  );
}

export default Navbar;