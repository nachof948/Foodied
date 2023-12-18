import React from 'react';
import { ImagenRegistrarme, SignUp } from '../../indice'
import './Hoja de estilos/SignUp.css'
const Registrarme = () => {
  return(
    <main className='main-registro'>
      <ImagenRegistrarme />
      <SignUp />
    </main>
  )
}

export { Registrarme }