import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
      window.location.reload();
      localStorage.setItem('token', token)
      localStorage.setItem('username', nombreUsuario)
    }
    catch(err){
      console.log(err)
    }
  }
  return(
    <div className='registro'>
      <h1>Registarse</h1>
      <form onSubmit={manejarLogin}>
        <input type="text" 
        name='username' 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)} 
        placeholder='Nombre de usuario...' />

        <label htmlFor="">Contraseña</label>
        <input type="password" 
        name='password' 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)} 
        placeholder='Contraseña...' />
        <button type='submit'>Registarme</button>
      </form>
      <Link to={'/auth/signup'}>No tenes una cuenta?</Link>
    </div>
  )
}

export { SignIn }