import React, { useState, useEffect } from 'react';
import { Elegirnos, Footer, Header, Hero, MenuEspecial, MenuHabitual, Opciones, SobreNosotros } from '../../indice';
import './Hero/Hojas de estilo/Hero.css'
const Home = ({ usuarioLogueado, username, token }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando una carga de datos con un temporizador
    const timer = setTimeout(() => {
      setLoading(false); // Una vez que se simula la carga, establecer loading en falso
    }, 2000); // Tiempo de carga simulado de 2 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta antes de que termine la carga
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
          <Header usuarioLogueado={usuarioLogueado} username={username} />
          <Hero />
          <Opciones usuarioLogueado={usuarioLogueado} token={token}/>
          <Elegirnos />
          <MenuEspecial usuarioLogueado={usuarioLogueado} token={token} />
          <MenuHabitual usuarioLogueado={usuarioLogueado} token={token} />
          <SobreNosotros />
          <Footer />
        </>
      )}
    </>
  );
};

export { Home };
