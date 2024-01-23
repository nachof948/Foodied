import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Hoja de estilos/SignIn.css'

const SignIn = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'all',
  })
  const [error, setError] = useState(false)
  const navegar = useNavigate()

  const manejarLogin = async(values)=>{
    try{
      const response = await axios.post('https://foodied-server.vercel.app/auth/login', values)
      const token = response.data.token
      const nombreUsuario = response.data.username
      navegar('/comidas/all')
      localStorage.setItem('token', token)
      localStorage.setItem('username', nombreUsuario)
      window.location.reload();
    }
    catch(err){
      if(err.response && err.response.status === 401){
        setError(true)
      }
      console.log('Hay un problema', err)
    }
  }
  return(
    <div className='iniciar-sesion'>
      <h1>Iniciar Sesion</h1>
      <form className='form-iniciar' onSubmit={handleSubmit(manejarLogin)}>
        <input 
        {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
        className='input-form' type="text" 
        name='email' 
        placeholder='Email' />
        
        <div style={{display:"flex", justifyContent:"center"}}>
          {errors.email?.type === 'required' && <p className='error'>El campo email es requerido</p>}
          {errors.email?.type === 'pattern' && <p className='error'>El correo electrónico no es válido</p>}
        </div>

        <input 
        {...register('password', { required: true })}
        className='input-form' type="password" 
        name='password' 
        placeholder='Contraseña...' />
        <div style={{display:"flex", justifyContent:"center"}}>
          {error && <p className='error-email' style={{color:"red"}}>Email o contraseña incorrecta</p>}
          {errors.password?.type === 'required' && (
            <p className='error'>El campo contraseña es requerido</p>
          )}
        </div>
        <button className='btn-form'type='submit'>Iniciar Sesion</button>
      </form>
      <div className="pregunta">
        <p>No tenes una cuenta?</p>
        <span>/</span>
        <Link to={'/auth/signup'}>Registrarme</Link>
        <span>/</span>
        <Link to={'/'}>Volver al inicio</Link>
      </div>
      
    </div>
  )
}

export { SignIn }