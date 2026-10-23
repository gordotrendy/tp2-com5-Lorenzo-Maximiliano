import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const Sidebar = () => {
  //navlink para navegar sin recargar
  //aside etiqueta semantica para la barra lateral
  return (
    
    <aside className='sidebar'>
      <Header nombre="Maximiliano Lorenzo" profesion="Desarrollador Web"/>

      <nav>
        
        <NavLink to="/" end>Home</NavLink>
       
        <NavLink to="/About">Sobre Mi</NavLink>
       
        <NavLink to="/Skills">Habilidades</NavLink>
        
        <NavLink to="/Projects">Proyectos</NavLink>
        
        <NavLink to="/Contact">Contacto</NavLink>

      </nav>

      <Footer />
    </aside>
  )
}

export default Sidebar