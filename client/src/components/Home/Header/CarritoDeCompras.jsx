import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const CarritoDeCompras = ({usuarioLogueado}) => {
  return(
    <div>
      {usuarioLogueado ? (
        <a href="/compras"><FaShoppingCart style={{marginRight:'0.1rem'}} /></a>
      ):(
        <a href="/auth/signup"><FaShoppingCart style={{marginRight:'0.1rem'}} /></a>
      )}
      
    </div>
  )
}

export { CarritoDeCompras }