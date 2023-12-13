import React from 'react';
import './Hoja de estilos/CompraRealizada.css'

const CompraRealizada = () => {
  return(
    <main className='contenedor-compra-realizada'> 
        <section>
            <h1 class="nombre">FOODIED</h1>
            <div class="contenedor-mensaje">
                <div class="verificado">
                    <div class="recuadro">
                    <h1 class="titulo">Compra Realizada con exito!</h1>
                </div>
                </div>
                <div class="gracias">
                <h2>Tu producto se esta preparando en muy poco tiempo sera enviado.</h2>
                <h2>Gracias por confiar en Foodied.</h2>
                <a class="volver-inicio" href="/">Volver al Inicio</a>
                </div>
            </div>
        </section>
    </main>
  )
}

export { CompraRealizada }