import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos'
import { useNavigate } from 'react-router-dom';
import { mirarProducto } from '../../../Funciones/mirarProducto';
import { agregarAlCarrito } from '../../../Funciones/agregarProducto';
import 'aos/dist/aos.css'

const RecetasEspecial = ({userGoogle}) => {
  const navegar = useNavigate()

	const [menuEspecial, setMenuEspecial] = useState([])

  useEffect(()=>{AOS.init()},[])
	useEffect(()=>{
		axios.get('/home')
		.then((response=>{
      setMenuEspecial(response.data.comidas)
		}))
	},[])

  return(
    <>
			{menuEspecial.slice(4,7).map(receta =>{
				const {imgUrl, nombre, precio, estrellas, _id} = receta
        return(
          <div  data-aos="zoom-in" data-aos-duration="750" key={_id}>
            <div className='especial tarjeta-producto'  onClick={()=>{mirarProducto(_id, navegar)}} >
            <img className='comida' src={imgUrl} alt={nombre} loading="lazy"/>
            <h2>{nombre}</h2>
              <div className="estrellas">
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <p className="num">({estrellas})</p>
              </div>
              <div className="precio">
                <p>${precio}</p>
              </div>
          </div>
          {userGoogle ? (
            <button className='comprar-ahora bolsa' onClick={()=>{agregarAlCarrito(_id, navegar)}}><img src="/Imagenes/icons8-bolsa-de-compras-45.png" alt="Bolsa" /></button>
            ) : (
              <a className='comprar-ahora bolsa' href='/auth/registrarse'><img src="/Imagenes/icons8-bolsa-de-compras-45.png" alt="Bolsa" /></a>
            )}
          </div>
          
        )
			})}
    </>
  )
}

export { RecetasEspecial }