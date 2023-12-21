import React from 'react';
import { RecetasHabitual, TextosMenuHabitual } from '../../../indice';
import './Hoja de estilos/MenuHabitual.css'
const MenuHabitual = ({usuarioLogueado, token}) => {
  return(
    <section id='menuHabitual' className='comida-habitual'>
      <div className='contenedor-comida-habitual'>
        <TextosMenuHabitual />
        <div className='comidas'>
          <RecetasHabitual usuarioLogueado={usuarioLogueado} token={token} />
        </div>
      </div>
    </section>
  )
}

export { MenuHabitual }