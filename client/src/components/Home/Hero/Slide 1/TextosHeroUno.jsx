import React from 'react';
import { ExplorarHero , OrdenarHero, PreguntaHero } from '../../../../indice';

const TextosHeroUno = () => {
  return(
    <div className='textos-hero'>
      <PreguntaHero />
      <h1>SOLO VEN A FOODIED & ORDENA</h1>
      <p>Aquí encontrarás comida pura y de la mejor calidad. Ordene ahora para satisfacer su hambre</p>
      <div className="btns-hero">
        <OrdenarHero />
        <ExplorarHero />
      </div>
    </div>
  )
}

export { TextosHeroUno }