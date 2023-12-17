import axios from 'axios';
const agregarAlCarrito = (productoId, navegar) => {
  // Realizar una solicitud al servidor para agregar el producto al carrito por su ID
    axios.post('https://foodied-server.vercel.app/compras/agregar', { productoId })
      .then((response) => {
        navegar('/compras')
        console.log('Producto agregado al carrito', response.data.carrito);
      })
      .catch((error) => {
        console.log(error);
      });
  };
export{ agregarAlCarrito }