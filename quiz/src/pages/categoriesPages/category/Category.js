import React from 'react';
import {Link} from 'react-router-dom'

const Category = ( ) => {
  return (
    <div>
      <h1>Categorias</h1>

      <ul>
        <li><Link to="/program">Programação</Link></li>
        <li><Link to="/history">História</Link></li>
        <li><Link to="/science">Ciências</Link></li>
        <li><Link to="/entertainment">Entretenimento</Link></li>
        <li><Link to="/art">Arte</Link></li>
        <li><Link to="/sport">Esportes</Link></li>
      </ul>
    </div>
  );
}

export default Category;