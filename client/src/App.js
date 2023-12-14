
import './App.css';
import { Route, Routes} from 'react-router-dom'
import { TodasLasComidas, Carnes, Ensaladas, Sushi, Pastas, Pizzas, Sopas, Dulces, Veganos, Hamburguesas, Home, Producto, Registrarme, Carrito, CompraRealizada} from './indice';

function App() {

  return (
  <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/comidas/all' element={<TodasLasComidas/>}></Route>
        <Route path='/comidas/carnes' element={<Carnes />}></Route>
        <Route path='/comidas/ensaladas' element={<Ensaladas />}></Route>
        <Route path='/comidas/sushi' element={<Sushi />}></Route>
        <Route path='/comidas/pastas' element={<Pastas  />}></Route>
        <Route path='/comidas/pizzas' element={<Pizzas />}></Route>
        <Route path='/comidas/veganos' element={<Veganos />}></Route>
        <Route path='/comidas/sopas' element={<Sopas />}></Route>
        <Route path='/comidas/dulces' element={<Dulces />}></Route>
        <Route path='/comidas/hamburguesas' element={<Hamburguesas />}></Route>
        <Route path='/producto/:_id' element={<Producto />}></Route>
        <Route path='/auth/registrarse' element={<Registrarme />}></Route>
        <Route path='/compras' element={<Carrito />}></Route>
        <Route path='/compra-realizada' element={<CompraRealizada />}></Route>
        
      </Routes>
  </div>
  );
}

export default App;
