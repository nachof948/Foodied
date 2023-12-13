import React from 'react';
import { Link } from 'react-router-dom';
const Registrarse = ({ userGoogle }) => {
  const cerrarSesion = ()=>{
    window.open('http://localhost:4500/auth/logout','_self')
  }
  return (
    <>
      {!userGoogle && (
        <div className='registrarse'>
          <Link to={"/auth/registrarse"}>Registrarse</Link>
        </div>
      )}
      {userGoogle && (
        <div>
          <div className="registrarse">
            <img className='avatar' src={userGoogle.image} alt="" />
            <Link to={"/auth/registrarse"}>{userGoogle.username}</Link>
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