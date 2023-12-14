import axios from 'axios';
const mirarProducto = (productId, navegar) => {
  axios.post(`https://foodied-restaurante.vercel.app/producto/${productId}`)
    .then(() => {
      navegar(`/producto/${productId}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {mirarProducto};