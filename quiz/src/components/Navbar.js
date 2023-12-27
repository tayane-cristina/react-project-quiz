import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { useAuthenticator } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

const Navbar = ( ) => {

  const {logout} = useAuthenticator()
  const {user} = useAuthValue()

  return (
    <div className='navbar'>
      <div className='navbar-h1-tilte'>
        {user ? <h1>Olá, {user.displayName}</h1> : <h1>Diverte Quiz</h1>}
      </div>
        <nav className='navbar-nav'>
            <ul className='navbar-ul-options-to-nav'>
              <NavLink className="navlink-to-navbar" to="/">Página inicial</NavLink>
              <NavLink className="navlink-to-navbar" to="/about">Sobre</NavLink>
              {!user && 
              <>
                <NavLink className="navlink-to-navbar" to="/register">Criar cadastro</NavLink>
                <NavLink className="navlink-to-navbar" to="/signin">Entrar</NavLink>
              </>
              }
              {user && 
              <>
                <NavLink className="navlink-to-navbar" to="/category">Categorias</NavLink>
                <button className='btn-navbar' onClick={logout}><img className='logo-out' src='https://cdn-icons-png.flaticon.com/128/126/126467.png' alt='logo-sair'></img></button>
              </>
              }   
            </ul>
        </nav>
      
    </div>
  );
}

export default Navbar;