import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav className='menu'>
      <ul>
          <li><Link to="/Inicio"></Link></li>
          <li><Link to="/apiario">Apiario</Link></li>
          <li><Link to="/colmena">Colmena</Link></li>
          <li><Link to="/camaracria">Cámara de Cría</Link></li>
          <li><Link to="/alza">Alza Melaria</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;