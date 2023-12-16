import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navegar = useNavigate()

  
  const manejarRegistro = (event) => {
    event.preventDefault()
    axios.post('/auth/signup',{email, username, password})
    .then((response) =>{
      alert('Registration successful')
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
        <label htmlFor="">Email</label>
        <input type="email" 
        name='email' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)} 
        placeholder='Email...' />

        <label htmlFor="">Nombre de Usuario</label>
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
      <Link to={'/auth/signin'}>Login</Link>
    </div>
  )
}

export { SignUp }