import React from 'react';

const CarritoDeCompras = ({usuarioLogueado}) => {
  return(
    <div>
      {usuarioLogueado ? (
        <a href="/compras"><i className="bi bi-cart"></i></a>
      ):(
        <a href="/auth/signup"><i className="bi bi-cart"></i></a>
      )}
    </div>
  )
}

export { CarritoDeCompras }