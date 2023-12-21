/* import { useEffect, useState } from 'react'; */
import './App.css';
import { Route, Routes} from 'react-router-dom'
import { TodasLasComidas, Carnes, Ensaladas, Sushi, Pastas, Pizzas, Sopas, Dulces, Veganos, Hamburguesas, Home, Producto, Carrito, CompraRealizada, Registrarme, IniciarSesion} from './indice';
/* import axios from 'axios'; */

function App() {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const usuarioLogueado = localStorage.getItem('token') !== null;

/*   const [userGoogle, setUserGoogle] = useState(null)
  
  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const response = await axios.get('https://foodied-server.vercel.app/auth/exito',{
          withCredentials: true
        });
        console.log('El usuario es:', response.data)
        if (response.status === 200) {
          if (response.data?.user) {
            setUserGoogle(response.data.user);
          } else {
            setUserGoogle(null);
          }
        } else {
          throw new Error('Error en la autentificación');
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    obtenerUsuario();
  }, []); */
  return (
  <div className="App">
      <Routes>
      <Route path='/' element={<Home usuarioLogueado={usuarioLogueado} username={username} token={token} />}></Route>
        <Route path='/comidas/all' element={<TodasLasComidas usuarioLogueado={usuarioLogueado} username={username} />}></Route>
        <Route path='/comidas/carnes' element={<Carnes usuarioLogueado={usuarioLogueado} username={username} token={token} />}></Route>
        <Route path='/comidas/ensaladas' element={<Ensaladas usuarioLogueado={usuarioLogueado} username={username} token={token} />}></Route>
        <Route path='/comidas/sushi' element={<Sushi usuarioLogueado={usuarioLogueado} username={username} token={token} />}></Route>
        <Route path='/comidas/pastas' element={<Pastas usuarioLogueado={usuarioLogueado} username={username} token={token}  />}></Route>
        <Route path='/comidas/pizzas' element={<Pizzas usuarioLogueado={usuarioLogueado} username={username} token={token} />}></Route>
        <Route path='/comidas/veganos' element={<Veganos usuarioLogueado={usuarioLogueado} username={username} token={token} />}></Route>
        <Route path='/comidas/sopas' element={<Sopas usuarioLogueado={usuarioLogueado} username={username} token={token} />}></Route>
        <Route path='/comidas/dulces' element={<Dulces usuarioLogueado={usuarioLogueado} username={username} token={token} />}></Route>
        <Route path='/comidas/hamburguesas' element={<Hamburguesas usuarioLogueado={usuarioLogueado} username={username} token={token} />}></Route>
        <Route path='/producto/:_id' element={<Producto usuarioLogueado={usuarioLogueado} username={username} token={token} />}></Route>
        <Route path='/auth/signup' element={<Registrarme />}></Route>
        <Route path='/compras' element={<Carrito usuarioLogueado={usuarioLogueado} username={username} token={token} />}></Route>
        <Route path='/compra-realizada' element={<CompraRealizada />}></Route>
        <Route path= '/auth/signin' element={<SignIn />}></Route>
      </Routes>
  </div>
  );
}

export default App;
