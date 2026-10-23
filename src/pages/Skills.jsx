import SkillCard from "../components/SkillCard"


function Skills() {
    const habilidades = 
    [
        { nombre: 'C#', nivel: 'Intermedio' },
        { nombre: 'JavaScript', nivel: 'Intermedio' },
        { nombre: 'React', nivel: 'Intermedio' },
        { nombre: 'HTML5', nivel: 'Intermedio' },
        { nombre: 'CSS', nivel: 'Basico' },
        { nombre: 'Git', nivel: 'Basico' },

    ]
    //aca recorro el array con .map uno por uno atraves de una variable auxiliar
    //con key identifico cada elemento y lo muestro en una lista dinamica
    return (
        <section className="skills">
            <h2>Mis habilidades</h2>

            <ul className="skills-list">
                
                {habilidades.map((habilidad)=>  (
                    <SkillCard key={habilidad.nombre} nombre={habilidad.nombre} nivel={habilidad.nivel}/>
                    ))}
            </ul>
        </section>
    )
}

export default Skills