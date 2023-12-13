import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { mirarProducto } from '../../../Funciones/mirarProducto';
import { agregarAlCarrito } from '../../../Funciones/agregarProducto';
import './Hojas de estilo/Opciones.css'

const Opciones = ({userGoogle}) => {
  const [opciones, setOpciones] = useState([])
  const navegar = useNavigate()
  useEffect(() => {
    axios.get('/home')
    .then((response) =>{
      setOpciones(response.data.comidas)
    })
    .catch((error) =>{console.error(error)})
    
  },[])  
  

  return(
    <section id='opciones' className='seccion-opciones' >
      <div className='contenedor-opciones'>
        {opciones.slice(0, 4).map(opcion =>{
          const {nombre, descripcion, precio,imgUrl, _id} = opcion
          return(
            <div key={_id}>
            <div className='tarjeta tarjeta-producto' onClick={()=>{mirarProducto(_id, navegar)}} > 
              <img src={imgUrl} alt={nombre} loading="lazy" />
              <div className="tarjeta-textos">
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                
              </div>
            </div>
            <div className="opciones-comprar">
                  <p>${precio}</p>
                  {userGoogle ? (
                      <button className='comprar-producto' onClick={()=>{agregarAlCarrito(_id, navegar)}}>Comprar Ahora</button>
                  ) : (
                    <a className='comprar-producto' href='/auth/registrarse'>Comprar Ahora</a>
                  )}
                </div>
            </div> 
          )
        })}
      </div>
    </section>
  )
}

export { Opciones }