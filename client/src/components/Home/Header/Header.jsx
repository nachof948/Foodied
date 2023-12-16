import React, { useEffect, useState } from 'react';
import { CarritoDeCompras, Logo, Lupa, MenuResponsive, NavBar, Registrarse } from '../../../indice';
import './Hojas de Estilo/Header.css'

const Header = ({usuarioLogueado, username}) => {
  const [scroll, setScroll] = useState(false)
  useEffect(()=>{
    const manejarScroll = ()=>{
      if(window.innerWidth > 1024){
        if(window.scrollY > 1){
          setScroll(true)
        } else{
          setScroll(false)
        }
      }
    };
    window.addEventListener('scroll', manejarScroll)

    return ()=>{
      window.removeEventListener('scroll', manejarScroll)
    }
  },[])
  return(
    <header className={scroll ? 'header-verde' : 'header'}>
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
        <MenuResponsive usuarioLogueado={usuarioLogueado} username={username}/>
      </div>
    </header>
  )
}

export { Header }