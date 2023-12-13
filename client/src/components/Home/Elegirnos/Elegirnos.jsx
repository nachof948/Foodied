import React from 'react';
import { Motivos, TextosElegirnos } from '../../../indice';
import './Hojas de estilo/Elegirnos.css'
const Elegirnos = () => {
  return(
    <section className='elegirnos' id='elegirnos'>
      <div className="contenedor-elegirnos">
        <TextosElegirnos />
        <Motivos />
      </div>
    </section>
  )
}

export { Elegirnos }