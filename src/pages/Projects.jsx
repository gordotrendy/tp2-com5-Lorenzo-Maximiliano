function Projects(){

    const proyectos= [
        {
            
            nombre:'Tienda de Mascotas',
            descripcion:'Aplicacion Web para gestionar productos y categorias.',
            tecnologia:'JavaScript',
            estado:'Terminado',
            imagen: '/capturamascoteria.png',
            url: 'https://tienda-mascotas-projectobasico.vercel.app/'
        },
        {
        
            nombre:'EcoBot',
            descripcion:'Aplicacion Web para encontrar puntos de reciclaje y conocer rutas de camiones de basura',
            tecnologia:'JavaScript',
            estado:'en proceso',
            imagen: '/capturaecobot.png',
            url: 'https://eco-bot-psi.vercel.app/'
        },
        {
            
            nombre:'Verduleria San Demetrio',
            descripcion:'Aplicacion Web para gestionar stock, productos y categorias',
            tecnologia:'JavaScript',
            estado:'Terminado',
            imagen: '/capturaverduleria.png',
            url: 'https://verduleria-ecommerce-bienn.vercel.app/'
        }
    ]

    return (
        <section className="projects">
            <h2>
                Mis proyectos
            </h2>

            <ul className="projects-list">
                {proyectos.map((proyecto) =>
                (<li className="project-card" key={proyecto.nombre}>
                    <a 
                    href={proyecto.url}
                    target="_blank"
                    rel="noopener noreferrer">

                        <img className="imagenproject"
                        src={proyecto.imagen}
                        alt={`Imagen de ${proyecto.nombre}`}
                        />


                    <h3>{proyecto.nombre}</h3>
                    <p>{proyecto.descripcion}</p>
                    <p>Tecnologia: {proyecto.tecnologia}</p>
                    <p>Estado: {proyecto.estado}</p>

                    </a>
                </li>))}
            </ul>
        </section>
    )   
         
}

export default Projects