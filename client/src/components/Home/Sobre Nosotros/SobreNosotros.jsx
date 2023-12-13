import React from 'react';
import { Chefs, TextosSobreNosotros } from '../../../indice';
import './Hoja de estilos/SobreNosotros.css'
const SobreNosotros = () => {
  return(
    <section id='sobreNosotros' className='chefs'>
      <div className="contenedor-chefs">
        <div className="textos-chefs">
          <TextosSobreNosotros />
        </div>
        <div className="chefs-img">
          <Chefs />
        </div>
      </div>
    </section>
  )
}

export { SobreNosotros }