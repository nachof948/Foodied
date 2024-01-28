import React,{useState} from 'react';
import { CarritoDeCompras, Logo, Lupa, NavBarShop, Registrarse, BurgerButton } from '../../indice';
import '../Home/Header/Hojas de Estilo/Header.css'
const HeaderShop = ({usuarioLogueado, username}) => {

  const [click, setClick] = useState(false)
  const manejarClick = ()=>{
    setClick((click) => !click)
  }
  return(
    <header className='header-verde'>
      <div className="contenedor-header">
        <div className="logo">
          <Logo />
        </div>
        <div className={`contenedor-responsive ${click ? 'active' : ''}`}>
        <div className="navBar">
          <NavBarShop />
        </div>
        <div className="header-derecha">
          <div className="header-iconos">
            <Lupa />
            <CarritoDeCompras usuarioLogueado={usuarioLogueado} />
          </div>
          <Registrarse usuarioLogueado={usuarioLogueado} username={username} />
        </div>
        </div>
        <div className='menu-responsive'  >
        <BurgerButton click={click} manejarClick={manejarClick}/>
      </div>
      </div>
    </header>
  )
}

export { HeaderShop }