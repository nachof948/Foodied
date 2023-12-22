import axios from 'axios';
const agregarAlCarrito = (productoId,token,navegar) => {
  console.log(token.id)
  // Realizar una solicitud al servidor para agregar el producto al carrito por su ID
    axios.post('https://foodied-server.vercel.app/compras/agregar', { productoId },{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
      .then(() => {
        navegar('/compras')
      })
      .catch((error) => {
        console.log(error);
      });
  };
export{ agregarAlCarrito }