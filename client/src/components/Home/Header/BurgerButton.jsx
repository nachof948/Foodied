import React from 'react';
import './Hojas de Estilo/BurgerButton.css'
const BurgerButton = ({click, manejarClick}) => {
  return(
    <div className={`icon nav-icon-5 ${click ? 'open' : ''}`} onClick={manejarClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export { BurgerButton }