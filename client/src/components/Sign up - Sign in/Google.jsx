import React from 'react';

const Google = () => {
  
  const googleAuth = ()=>{
    window.open("http://localhost:4500/auth/google","_self")
  }

  return(
    <div className='registro-google'>
      <h1>Registarse</h1>
      <button className='google-enlace' onClick={googleAuth}>
        <span><i className="bi bi-google"></i></span>
        Google
      </button>
      <a href="/">Volver al Inicio</a>
    </div>
  )
}

export { Google }