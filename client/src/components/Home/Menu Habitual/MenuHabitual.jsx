import React from 'react';
import { RecetasHabitual, TextosMenuHabitual } from '../../../indice';
import './Hoja de estilos/MenuHabitual.css'
const MenuHabitual = () => {
  return(
    <section id='menuHabitual' className='comida-habitual'>
      <div className='contenedor-comida-habitual'>
        <TextosMenuHabitual />
        <div className='comidas'>
          <RecetasHabitual />
        </div>
      </div>
    </section>
  )
}

export { MenuHabitual }