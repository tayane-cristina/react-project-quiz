import React from 'react';
import {Link} from 'react-router-dom'
import './Category.css'

const Category = ( ) => {
  return (
    <div className='div-categories'>
      <div className='page-category-header'>
        <h1>Categorias</h1>
        <p>Escolha a categoria de sua preferência</p>
      </div> 

      <ul className='ul-options-category'>
        <li className='option-categorie option-program'>
          <img className='icon-category' src='https://img.icons8.com/?size=50&id=39210&format=png' alt='img-computer'></img>
          <Link className='a-category-option' to="/program">Programação</Link>
        </li>

        <li className='option-categorie option-history'>
          <img className='icon-category' src='https://img.icons8.com/?size=50&id=37917&format=png' alt='img-book'></img>
          <Link className='a-category-option' to="/history">História</Link>
        </li>

        <li className='option-categorie option-science'>
          <img className='icon-category' src='https://img.icons8.com/?size=50&id=58872&format=png' alt='img-tubs'></img>
          <Link className='a-category-option' to="/science">Ciências</Link>
        </li>

        <li className='option-categorie option-entertainment'>
          <img className='icon-category' src='https://img.icons8.com/?size=50&id=4923&format=png' alt='img-mask'></img>
          <Link className='a-category-option' to="/entertainment">Entretenimento</Link>
        </li>

        <li className='option-categorie option-art'>
          <img className='icon-category' src='https://img.icons8.com/?size=50&id=GXbDr_HC5ZF1&format=png' alt='img-brush'></img>
          <Link className='a-category-option' to="/art">Arte</Link>
        </li>

        <li className='option-categorie option-sport'>
          <img className='icon-category' src='https://img.icons8.com/?size=50&id=9820&format=png' alt='img-ball'></img>
          <Link className='a-category-option' to="/sport">Esportes</Link>
        </li>
      </ul>
    </div>
  );
}
export default Category;