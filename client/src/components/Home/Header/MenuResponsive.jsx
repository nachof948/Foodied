import React, { useState } from 'react';
import {Lupa, CarritoDeCompras, Registrarse} from '../../../indice'
const MenuResponsive = ({userGoogle}) => {
  const [menuDesplegado, setMenuDesplegado] = useState(false)

  const manejarClick = () => {
    setMenuDesplegado(!menuDesplegado)
  }
  return(
    <div className='contenedor-responsive'>
      <div className='logo-responsive'>
        <a className='empresa-responsive' href='/'>FOODIED</a>
      </div>
      {menuDesplegado &&
      <div className='menu-responsivo'>
      <nav className='nav-responsive'>
        <a href="/">Inicio</a>
        <a href="#menuEspecial">Menu</a>
        <a href="#sobreNosotros">Sobre Nosotros</a>
        <a href="#contactos">Contacto</a>
      </nav>
      <div className="header-derecha-responsive">
          <div className="header-iconos">
            <Lupa />
            <CarritoDeCompras />
          </div>
          <Registrarse userGoogle={userGoogle} />
        </div>
    </div>}
        <div className="btn-responsive">
          <button id="menuResponsive" class="menu-responsive" onClick={()=>manejarClick()}><i class="bi bi-list"></i></button>
        </div>
    </div>
  )
}

export { MenuResponsive }