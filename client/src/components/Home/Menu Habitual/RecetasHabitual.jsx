import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos'
import { useNavigate } from 'react-router-dom';
import { mirarProducto } from '../../../Funciones/mirarProducto';
import 'aos/dist/aos.css'
import { agregarAlCarrito } from '../../../Funciones/agregarProducto';

const RecetasHabitual = ({userGoogle}) => {
  const navegar = useNavigate()
  const [menuHabitual,setMenuHabitual] = useState([])
  useEffect(()=>{AOS.init()},[])
  useEffect(()=>{
    axios.get('/home')
    .then((response=>{
      setMenuHabitual(response.data.comidas)
    }))
  },[])
  return(
    <>
      {menuHabitual.slice(7, 13).map(habitual =>{
        const {_id, nombre, descripcion,precio, estrellas, imgUrl} = habitual
        return(
          <div data-aos="fade-up" 
          data-aos-duration="750" key={_id}>
            <div className='tarjeta-habitual tarjeta-producto' 
          onClick={()=>{mirarProducto(_id, navegar)}} >
            <img className='tarjeta-habitual-img' src={imgUrl} alt={nombre} loading="lazy" />
            <div className="tarjeta-textos-habitual">
              <h2>{nombre}</h2>
              <div className="estrellasHabitual">
              <img className="estrella" src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <img className="estrella"  src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <img className="estrella"  src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <img className="estrella" src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <img className="estrella"  src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                <p className="numero">({estrellas})</p>
              </div>
              <p>{descripcion}</p>
            </div>
          </div>
          <div className="opciones-comprar-habitual">
                <p>${precio}</p>
                {userGoogle ? (
                      <button className='comprar-producto' onClick={()=>{agregarAlCarrito(_id, navegar)}}>Comprar Ahora</button>
                  ) : (
                    <a className='comprar-producto' href='/auth/registrarse'>Comprar Ahora</a>
                  )}              </div>
          </div>
          
        )
      })}
    </>
  )
}

export { RecetasHabitual }