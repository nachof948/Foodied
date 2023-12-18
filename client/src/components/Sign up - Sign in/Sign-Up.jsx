import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import './Hoja de estilos/SignUp.css'



const SignUp = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navegar = useNavigate()

  
  const manejarRegistro = (event) => {
    event.preventDefault()
    axios.post('https://foodied-server.vercel.app/auth/signup',{email, username, password})
    .then(() =>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Te registraste exitosamente!!",
        showConfirmButton: false,
        timer: 1500
      });
      setEmail('')
      setUsername('')
      setPassword('')
      navegar('/auth/signin')
    }).catch((error) => {
      console.log(error)
    })
  }

  return(
      <div className='registro'>
      <h1>Registarse</h1>
      <form onSubmit={manejarRegistro}>
        <input className='input-form' type="email" 
        name='email' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)} 
        placeholder='Email...' />

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
        <button className='btn-form' type='submit'>Registarme</button>
      </form>
      <div className="pregunta">
        <p>Ya tenes una cuenta?</p>
        <span>/</span>
        <Link to={'/auth/signin'}>Iniciar Sesion</Link>
        <span>/</span>
        <Link to={'/'}>Volver al inicio</Link>
      </div>
    </div>
  )
}

export { SignUp }