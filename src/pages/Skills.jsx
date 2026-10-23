import SkillCard from "../components/SkillCard"


function Skills() {
    const habilidades = [
        'C#',
        'JavaScript',
        'React',
        'HTML5',
        'CSS',
        'Git',

    ]
    //aca recorro el array con .map uno por uno atraves de una variable auxiliar
    //con key identifico cada elemento y lo muestro en una lista dinamica
    return (
        <section className="skills">
            <h2>Mis habilidades</h2>

            <ul className="skills-list">
                
                {habilidades.map((habilidad)=>  
                    (<li key={habilidad}>
                    {habilidad}
                    </li>)
                )}
            </ul>
        </section>
    )
}

export default Skills