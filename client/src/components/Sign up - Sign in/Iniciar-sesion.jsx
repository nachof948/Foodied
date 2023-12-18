import React from 'react';
import { ImagenIniciarSesion, SignIn } from '../../indice';
import './Hoja de estilos/SignIn.css'
const IniciarSesion = () => {
  return(
    <main className='main-registro'>
      <ImagenIniciarSesion />
      <SignIn />
    </main>
  )
}

export { IniciarSesion }