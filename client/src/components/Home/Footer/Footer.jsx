import React from 'react';
import './Hoja de estilos/Footer.css'
const Footer = () => {
  return(
    <footer id="contactos">
    <div className="contenedor-footer">
        <div className="menu">
            <h2>Menu</h2>
            <a href="#hero">Inicio</a>
            <a href="#elegirnos">Por que elegir</a>
            <a href="#menuEspecial">Menu Especial</a>
            <a href="#menuHabitual">Menu Regular</a>
            <a href="#sobreNosotros">Chef's especial</a>
        </div>

        <div className='ayuda'>
            <h2>Ayuda</h2>
            <a href="/">Privacidad</a>
            <a href="/">Terminos & Condiciones</a>
            <a href="/">Politica</a>
        </div>

        <div className='contacto'>
            <h2>Contacto</h2>
            <a href="/">+123 456 789</a>
            <a href="/">info@foodied.com</a>
            <a href="/">1234, Buenos Aires, ARG</a>
        </div>

        <div className='suscribite'>
            <h2>Suscribite a</h2>
            <h2>Nuestro Boletin</h2>
            <form action="">
                <input type="email" placeholder='Ingresa tu email' />
                <span><button>Suscribite</button></span>
            </form>
        </div>
    </div>
</footer>
  )
}

export { Footer }