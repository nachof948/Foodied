import React from 'react';
import { TextosMenuEspecial, RecetasEspecial } from '../../../indice';
import './Hoja de estilos/MenuEspecial.css'

const MenuEspecial = () => {

  return(
    <section id='menuEspecial' className='comida-especial'>
      <div className="comida-especial-contenedor">
        <TextosMenuEspecial />
        <div className="especiales" >
          <RecetasEspecial />
        </div>
      </div>
    </section>
  )
}

export { MenuEspecial }