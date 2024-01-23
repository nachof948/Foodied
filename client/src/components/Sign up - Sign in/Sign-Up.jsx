import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import './Hoja de estilos/SignUp.css'
import { useForm } from 'react-hook-form';



const SignUp = () => {
  const { register, formState: { errors }, handleSubmit }=useForm({
    mode: 'all'
  })
  const navegar = useNavigate()
  const [error, setError]= useState(false)

  
  const manejarRegistro = (values) => {
    axios.post('https://foodied-server.vercel.app/auth/signup', values)
    .then(() =>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Te registraste exitosamente!!",
        showConfirmButton: false,
        timer: 1500
      });
      navegar('/auth/signin')
    }).catch((error) => {
      if(error.response && error.response.status === 500){
        setError(true)
      }
      console.log(error)
    })
  }

  return(
      <div className='registro'>
      <h1>Registarse</h1>
      <form onSubmit={handleSubmit(manejarRegistro)}>
        <input 
        {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
        className='input-form' type="email" 
        name='email' 
        placeholder='Email...' />
        <div style={{display:"flex", justifyContent:"center"}}>
          {errors.email?.type === 'required' && <p className='error'>El campo email es requerido</p>}
          {errors.email?.type === 'pattern' && <p className='error'>El correo electrónico no es válido</p>}
        </div>

        <input 
        {...register('username', {required:true})}
        className='input-form' type="text" 
        name='username' 
        placeholder='Nombre de usuario...' 
        />
        <div style={{display:"flex", justifyContent:"center"}}>
          {errors.username?.type === 'required'&& <p className='error'>El campo nombre es requerido</p>}
        </div>

        <input {...register('password', {required:true})} 
        className='input-form' type="password" 
        name='password' 
        placeholder='Contraseña...' />
        <div style={{display:"flex", justifyContent:"center"}}>
          {errors.password?.type === 'required'&& <p className='error'>El campo contraseña es requerido</p>}
          {error && <p className='error-email' style={{color:"red"}}>Este email o nombre de usuario ya esta registrado</p>}
        </div>
        <button className='btn-form' type='submit'>Registrarme</button>
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