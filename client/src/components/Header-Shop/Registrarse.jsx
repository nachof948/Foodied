import React from 'react';
import { Link } from 'react-router-dom';
const Registrarse = ({ usuarioLogueado, username}) => {

    const cerrarSesion = ()=>{
    localStorage.removeItem('token')
    navegar('/')
    window.location.reload();
  }

  return (
    <>
      {!usuarioLogueado && (
        <div className='registrarse'>
          <Link to={"/auth/registrarse"}>Registrarse</Link>
        </div>
      )}
      {usuarioLogueado && (
        <div>
          <div className="registrarse">
            <Link to={"/auth/registrarse"}>{username}</Link>
          </div>
          <div className="cerrar-sesion">
            <button onClick={cerrarSesion}>Cerrar Sesion</button>
          </div>
        </div>
        
      )}
    </>
  );
};

export { Registrarse }