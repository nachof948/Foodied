import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderShop, Footer } from '../../indice'
import { agregarAlCarrito } from '../../Funciones/agregarProducto';
import './Hoja de estilos/Producto.css'

const Producto = ({userGoogle}) => {
  const params = useParams()
  const [nombre, setNombre] = useState('')
  const [img, setImg] = useState('')
  const [descripcionExtensa, setDescripcionExtensa] = useState('')
  const [rating, setRating] = useState('')
  const [vendidos, setVendidos] = useState('')
  const [precio, setPrecio] = useState('')
  const [productoId, setProductoId] = useState('')
  const navegar = useNavigate()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`/producto/${params._id}`);
        const datos = response.data;
  
        const delay = setTimeout(() => {
          setLoading(false); // Actualiza el estado de carga después del tiempo de espera
        }, 1000);
  
        setNombre(datos.nombre);
        setImg(datos.imgUrl);
        setDescripcionExtensa(datos.descripcionDetallada);
        setRating(datos.rating);
        setVendidos(datos.vendidos);
        setPrecio(datos.precio);
        setProductoId(datos._id);
  
        return () => clearTimeout(delay);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
    window.scrollTo({ top: 0, behavior: 'auto' });
  
    // Dependencia para el useEffect
  }, [params._id]);
  
  return(
    <>
    <HeaderShop userGoogle={userGoogle} /> 
      <main>
      {loading ? (
              <div className="contenedor-spinner">
                <div className="spinner"></div>
              </div>
                
              ) : (
                <section className='section-producto'>
                <div className="imagen-producto">
                  <img src={img} alt={nombre} />
                </div>
                <div className="producto-textos">
                  <h1 className='titulo-producto'>{nombre}</h1>
                  <div className="ventas-rating">
                    <div className="rating">
                      <div className="estrellas-producto">
                        <img className="estrella-producto" src="/Imagenes/icons8-estrella.png" alt="estrella"/>
                        <img className="estrella-producto" src="/Imagenes/icons8-estrella.png" alt="estrella"/>
                        <img className="estrella-producto" src="/Imagenes/icons8-estrella.png" alt="estrella"/>
                        <img className="estrella-producto" src="/Imagenes/icons8-estrella.png" alt="estrella"/>
                        <img className="estrella-producto" src="/Imagenes/icons8-estrella.png" alt="estrella"/>
                      </div>
                      <p>{rating}</p>
                    </div>
                    <p><span>Vendidos</span>{vendidos}</p>
                  </div>
                  <p className='precio-producto'>${precio}</p>
                  <p className='descripcion-extensa-producto'>{descripcionExtensa}</p>
                  {userGoogle ? (
                      <button className='comprar-producto' onClick={()=>{agregarAlCarrito(productoId, navegar)}}>Comprar Ahora</button>
                  ) : (
                    <a className='comprar-producto' href='/auth/registrarse'>Comprar Ahora</a>
                  )}
                </div>
              </section>
              )
              }
      </main> 
      <Footer />
    </>
  )
}

export { Producto }