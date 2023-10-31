import { Link } from 'react-router-dom'
import "./Categories.css"

const Categories = () => {
    return (
        <div className="category-div">
                <ul className='ul-categories'>
                    <li><Link to="/program">Programação</Link></li>
                    <li><Link to="/sciences">Ciências</Link></li>
                    <li><Link to="/entertainment">Entretenimento</Link></li>
                    <li><Link to="/art">Artes</Link></li>
                    <li><Link to="/history">História</Link></li>
                    <li><Link to="/sports">Esporte</Link></li>
                </ul>
        </div>
    )

};
export default Categories;