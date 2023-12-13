import React from 'react';
import { ImagenHeroUno, TextosHeroUno } from '../../../indice';
import './Hojas de estilo/Hero.css'
const Hero = () => {
  return(
    <section id='hero' className='hero'>
      <div className="contenedor-hero">
        <TextosHeroUno />
        <ImagenHeroUno />
      </div>
    </section>
  )
}

export { Hero }