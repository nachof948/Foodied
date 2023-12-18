import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Hoja de estilos/SignIn.css'
const SignIn = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navegar = useNavigate()

  const manejarLogin = async(e)=>{
    e.preventDefault()
    try{
      const response = await axios.post('https://foodied-server.vercel.app/auth/login',{ username, password})
      const token = response.data.token
      const nombreUsuario = response.data.username
      alert(`Bienvenido!!! ${nombreUsuario}`)
      setUsername('')
      setPassword('')
      navegar('/comidas/all')
      localStorage.setItem('token', token)
      localStorage.setItem('username', nombreUsuario)
      window.location.reload();
    }
    catch(err){
      console.log('Hay un problema', err)
    }
  }
  return(
    <div className='iniciar-sesion'>
      <h1>Iniciar Sesion</h1>
      <form className='form-iniciar' onSubmit={manejarLogin}>
        <input className='input-form' type="text" 
        name='username' 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)} 
        placeholder='Nombre de usuario...' />

        <input className='input-form' type="password" 
        name='password' 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)} 
        placeholder='Contraseña...' />
        <button className='btn-form'type='submit'>Iniciar Sesion</button>
      </form>
      <div className="pregunta">
        <p>No tenes una cuenta?</p>
        <span>/</span>
        <Link to={'/auth/signup'}>Registrarme</Link>
      </div>
      
    </div>
  )
}

export { SignIn }