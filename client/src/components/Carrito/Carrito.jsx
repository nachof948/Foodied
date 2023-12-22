import React, { useState, useEffect } from 'react';
import { HeaderShop, Footer } from '../../indice';
import axios from 'axios';
import './Hoja de estilos/Carrito.css';
import { useNavigate } from 'react-router-dom';


const Carrito = ({ usuarioLogueado, username, token }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const navegar = useNavigate()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('https://foodied-server.vercel.app/compras',{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
      .then((response) => {
        const delay = setTimeout(() => {
          setLoading(false); // Actualiza el estado de carga después del tiempo de espera
        }, 1000);
        setCarrito(response.data.carrito);

        const totalPrice = response.data.carrito.reduce((acc, item) => (
          acc + item.items.reduce((itemAcc, producto) => (
            itemAcc + (producto.precio * producto.cantidad)
          ), 0)
        ), 0);
        setTotal(totalPrice);
        return () => clearTimeout(delay);
      })
      
      .catch((error) => {
        console.log(error);
      });
      window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  
  const restarProducto = async (productoId) => {
    try {
      await axios.post('https://foodied-server.vercel.app/compras/restar', { id: productoId },{
        headers:{
          Authorization:`Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const updatedCarrito = carrito.map((item) => {
        const updatedItems = item.items.map((producto) => {
          if (producto._id === productoId) {
            const updatedCantidad = producto.cantidad - 1;
            if (updatedCantidad <= 0) {
              // Eliminar el producto del carrito si la cantidad es cero o menos
              return null; // Marcamos el producto para eliminación
            }
            return { ...producto, cantidad: updatedCantidad };
          }
          return producto;
        }).filter(Boolean); // Filtrar los productos marcados como null (eliminación)
  
        return { ...item, items: updatedItems };
      });
  
      setCarrito(updatedCarrito);
  
      const totalPrice = updatedCarrito.reduce((acc, item) => (
        acc + item.items.reduce((itemAcc, producto) => (
          itemAcc + (producto.precio * producto.cantidad)
        ), 0)
      ), 0);
      setTotal(totalPrice);
    } catch (error) {
      console.log(error);
    }
  };
  

  const sumarProducto = async (productoId, token) => {
    console.log(token)
    try {
      await axios.post('https://foodied-server.vercel.app/compras/sumar', { id: productoId },{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
        
      const updatedCarrito = carrito.map((item) => {
        const updatedItems = item.items.map((producto) => {
          if (producto._id === productoId) {
            return { ...producto, cantidad: producto.cantidad + 1 };
          }
          return producto;
        });
        return { ...item, items: updatedItems };
      });
      setCarrito(updatedCarrito);
  
      const totalPrice = updatedCarrito.reduce((acc, item) => (
        acc + item.items.reduce((itemAcc, producto) => (
          itemAcc + (producto.precio * producto.cantidad)
        ), 0)
      ), 0);
      setTotal(totalPrice);
    } catch (error) {
      console.log(error);
    }
  };
    
  const eliminarProducto = (id) => {
    axios.delete(`https://foodied-server.vercel.app/compras/eliminar/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        const updatedCarrito = carrito.map((item) => {
          const updatedItems = item.items.filter((producto) => producto._id !== id);
          return { ...item, items: updatedItems };
        });
        if(updatedCarrito.length===0){
          return null
        }
        setCarrito(updatedCarrito);
  
        const totalPrice = updatedCarrito.reduce((acc, item) => (
          acc + item.items.reduce((itemAcc, producto) => (
            itemAcc + (producto.precio * producto.cantidad)
          ), 0)
        ), 0);
        setTotal(totalPrice);
      })
     
      .catch((error) => {
        console.log(error);
      });
  };
  const comprarProducto = ()=>{
    axios.delete('https://foodied-server.vercel.app/compra-realizada',{
      headers:{
        Authorization:`Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(()=>{
      navegar('/compra-realizada')
    })
    .catch((error) => console.log(error))
  }
  return (
    <div>
      <HeaderShop usuarioLogueado={usuarioLogueado} username={username} token={token} />
      <section className='section-carrito'>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div>
            {carrito.length === 0 ? (
              <div>
                <h1 className='mensaje-carrito'>No hay productos en el carrito</h1>
                <div className="realizar-compra">
                  <a className="explorar" href="/comidas/all">Explorar más</a>
                </div>
              </div>
            ) : (
              carrito.map((item) => (
                <div key={item._id}>
                  {item.items.map((producto) => {
                    const { nombre, _id, imagen, precio, cantidad } = producto;
                    return (
                      <div className="carrito-productos" key={_id}>
                        <img src={imagen} alt={nombre} width={"100px"} />
                        <button className="comprar-ahora agregar" type="submit" onClick={() => restarProducto(_id)}>-</button>
                        <p className="product-quantity">{cantidad}</p>
                        <button className="comprar-ahora agregar" onClick={() => sumarProducto(_id, token)}>+</button>
                        <p>$ {precio}</p>
                        <button className='eliminar' onClick={() => eliminarProducto(_id)}>Eliminar</button>
                      </div>
                    );
                  })}
                </div>
              ))
            )}
            {carrito.length !== 0 && (
              <div className="realizar-compra">
                <div className="comprar-carrito">
                  <div className='comprar'>
                    <p>Total:${total}</p>
                    <button className="compra" onClick={() => comprarProducto()}>Comprar</button>
                  </div>
                  <div>
                    <a className="explorar" href="/comidas/all">Explorar más</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
export { Carrito };
