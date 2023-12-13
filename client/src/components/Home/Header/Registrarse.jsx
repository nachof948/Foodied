import React,{useState} from 'react';
import { Link } from 'react-router-dom';
const Registrarse = ({ userGoogle }) => {
  const [logout, setLogout] = useState(false)
  
  const manejarLogout =()=>{
    setLogout(!logout)
  }

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
          <div className="registrarse" onClick={manejarLogout}>
            <img className='avatar' src={userGoogle.image} alt="" />
            <p>{userGoogle.username}</p>
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