import React,{useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Motivos = () => {
  const motivos = [
    {
      img: '/Imagenes/Motivos/Ensalada.png',
      titulo:'Comida sana',
      descripcion:'Aqui servimos comida sana. Usted puede elegir cualquier alimento que le guste.'
    },
    {
      img: '/Imagenes/Motivos/Carpeta.svg',
      titulo:'La mejor calidad',
      descripcion:'La calidad de nuestra comida es excelente. Aqui obtendra exactamente lo que desea.'
    },
    {
      img: '/Imagenes/Motivos/Delivery.png',
      titulo:'Entrega rapida',
      descripcion:'Se puede decir que el principal objetivo de nuestro repartidor es entregar los pedidos rapidamente.'
    }
  ]
  useEffect(()=>{AOS.init()},[])
  return(
    <div className='motivos'>
        {motivos.map((motivo, index) =>{
          const {img, titulo, descripcion} = motivo
          return(
            <div className="motivo" key={index}  data-aos="zoom-in" data-aos-duration="750">
              <img src={img} alt={titulo}/>
              <h2>{titulo}</h2>
              <p>{descripcion}</p>
            </div>
          )
        })}
      </div>
  )
}

export { Motivos }