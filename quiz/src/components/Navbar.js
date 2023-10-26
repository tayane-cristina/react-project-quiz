import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='div-navbar'>
            <h1 className='h1-navbar'>Diverti Quiz</h1>
            <div className='links-navbar'>
                <Link to="/">Home</Link>
                <Link to="/categories">Categorias</Link>
                <Link to="/createaquiz">Criar Quiz</Link>
            </div>
        </div>
    )

};
export default Navbar;