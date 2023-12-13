import React, { useState, useEffect } from 'react';
import { HeaderShop, Footer } from '../../indice';
import axios from 'axios';
import './Hoja de estilos/Carrito.css';
import { useNavigate } from 'react-router-dom';


const Carrito = ({ userGoogle }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const navegar = useNavigate()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('/compras')
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
      await axios.post('/compras/restar', { id: productoId });
  
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
  

  const sumarProducto = async (productoId) => {
    try {
      await axios.post('/compras/sumar', { id: productoId });
  
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
    axios.delete(`/compras/eliminar/${id}`)
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
    axios.post('/compra-realizada')
    .then(()=>{
      navegar('/compra-realizada')
    })
    .catch((error) => console.log(error))
  }
  return (
    <div>
      <HeaderShop userGoogle={userGoogle} />
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
                        <button className="comprar-ahora agregar" onClick={() => sumarProducto(_id)}>+</button>
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
