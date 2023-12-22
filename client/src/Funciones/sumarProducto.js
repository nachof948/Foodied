import axios from 'axios';

const sumarProducto = async (productoId, token, carrito, setCarrito, setTotal) => {
  try {
    await axios.post('https://foodied-server.vercel.app/compras/sumar', { id: productoId }, {
      headers: {
        Authorization: `Bearer ${token}`
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

export { sumarProducto };
