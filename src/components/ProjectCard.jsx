

function ProjectCard({ nombre, descripcion, tecnologia, estado, imagen, url }) 
{
  return (

    <li className="project-card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="imagenproject" src={imagen} alt={`Imagen de ${nombre}`} />
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>Tecnologia: {tecnologia}</p>
        <p>Estado: {estado}</p>
      </a>
    </li>
  )
}

export default ProjectCard