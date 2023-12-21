import React from 'react';
import { TextosMenuEspecial, RecetasEspecial } from '../../../indice';
import './Hoja de estilos/MenuEspecial.css'

const MenuEspecial = ({usuarioLogueado, token}) => {

  return(
    <section id='menuEspecial' className='comida-especial'>
      <div className="comida-especial-contenedor">
        <TextosMenuEspecial />
        <div className="especiales" >
          <RecetasEspecial usuarioLogueado={usuarioLogueado} token={token} />
        </div>
      </div>
    </section>
  )
}

export { MenuEspecial }