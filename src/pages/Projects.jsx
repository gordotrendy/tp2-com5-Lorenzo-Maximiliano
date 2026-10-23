import ProjectCard from "../components/ProjectCard"

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
                {proyectos.map((proyecto) => (
                    <ProjectCard key={proyecto.nombre} {...proyecto} />
                ))}
            </ul>
        </section>
    )   
         
}

export default Projects