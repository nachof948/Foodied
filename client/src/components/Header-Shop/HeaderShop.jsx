import React from 'react';
import { CarritoDeCompras, Logo, Lupa, NavBar, Registrarse, MenuResponsive } from '../../indice';
import '../Home/Header/Hojas de Estilo/Header.css'
const HeaderShop = ({usuarioLogueado, username}) => {
  return(
    <header className='header-verde'>
      <div className="contenedor-header">
        <div className="logo">
          <Logo />
        </div>
        <div className="navBar">
          <NavBar />
        </div>
        <div className="header-derecha">
          <div className="header-iconos">
            <Lupa />
            <CarritoDeCompras />
          </div>
          <Registrarse usuarioLogueado={usuarioLogueado} username={username} />
        </div>
      </div>
      <div >
        <MenuResponsive userGoogle={userGoogle}/>
      </div>
    </header>
  )
}

export { HeaderShop }