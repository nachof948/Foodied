import React from 'react';
import {Link} from'react-router-dom'

const Shop = () => {
  return(
      <div className='titulos'>
        <Link to='/comidas/all'>Todas las comidas</Link>
        <Link to='/comidas/carnes'>Carnes</Link>
        <Link to='/comidas/ensaladas'>Ensaladas</Link>
        <Link to='/comidas/sushi'>Sushi</Link>
        <Link to='/comidas/pastas'>Pastas</Link>
        <Link to='/comidas/pizzas'>Pizzas</Link>
        <Link to='/comidas/veganos'>Veganos</Link>
        <Link to='/comidas/sopas'>Sopas</Link>
        <Link to='/comidas/dulces'>Dulces</Link>
        <Link to='/comidas/hamburguesas'>Hamburguesas</Link>
      </div>
  )
}

export { Shop }