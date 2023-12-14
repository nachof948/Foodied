import React, { useState, useEffect } from 'react';
import { Elegirnos, Footer, Header, Hero, MenuEspecial, MenuHabitual, Opciones, SobreNosotros } from '../../indice';
import axios from 'axios'
import './Hero/Hojas de estilo/Hero.css'
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [userGoogle, setUserGoogle] = useState(null)

  useEffect(() => {
    // Simulando una carga de datos con un temporizador
    const timer = setTimeout(() => {
      setLoading(false); // Una vez que se simula la carga, establecer loading en falso
    }, 2000); // Tiempo de carga simulado de 2 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta antes de que termine la carga
  }, []);

  
  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const response = await axios.get('https://foodied-server.vercel.app/auth/exito');
        console.log('El usuario es:', response.data)
        if (response.status === 200) {
          if (response.data && response.data.user) {
            setUserGoogle(response.data.user); // Usuario autenticado
          } else {
            setUserGoogle(null); // Usuario no autenticado
          }
        } else {
          throw new Error('Error en la autentificación');
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    obtenerUsuario();
  }, []);
  return (
    <>
      {loading ? (
        <div className='contenedor-spinner-home'>
            <h1 style={{fontSize:"4rem", marginBottom:"1rem"}}>FOODIED</h1>
            <div className="spinner"></div>
        </div>
        
      ) : (
        <>
          <Header userGoogle={userGoogle} />
          <Hero />
          <Opciones />
          <Elegirnos />
          <MenuEspecial />
          <MenuHabitual />
          <SobreNosotros />
          <Footer />
        </>
      )}
    </>
  );
};

export { Home };
