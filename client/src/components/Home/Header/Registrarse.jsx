import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Registrarse = ({ usuarioLogueado, username }) => {
  const navegar = useNavigate()
  const [logout, setLogout] = useState(false)
  
  const manejarLogout =()=>{
    setLogout(!logout)
  }

  const cerrarSesion = ()=>{
    localStorage.removeItem('token')
    navegar('/')
    window.location.reload();
  }

  return (
    <>
      {!usuarioLogueado && (
        <div className='registrarse'>
          <Link to={"/auth/signup"}>Registrarse</Link>
        </div>
      )}
      {usuarioLogueado && (
        <div>
          <div className="registrarse" onClick={manejarLogout}>
            <p>{username}</p>
          </div>
          {logout && 
            <div className='logout'>
              <div className="cerrar-sesion">
              <button onClick={cerrarSesion}>Cerrar Sesion</button>
            </div>
            <div className="cerrar-sesion-responsive">
              <button onClick={cerrarSesion}>Cerrar Sesion</button>
            </div>
            </div>
          }
        </div>
        
      )}
    </>
  );
};

export { Registrarse }