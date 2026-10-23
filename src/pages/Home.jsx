import {Link} from 'react-router-dom'

function Home() {
    
    //el link es para navegar el enlace sin recargar
    return(
        <section className="hero">
            <h2>Bienvenido a mi Portafolio</h2>
            <p>Soy un estudiante de Programacion y encuentro soluciones a tus problemas a traves del Desarrolo Web</p>
            <Link to="/projects" className="boton-link">Ver mis proyectos</Link>
        </section>
    )
}

export default Home