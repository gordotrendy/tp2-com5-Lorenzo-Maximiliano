//importamos useState para 
import { useState } from 'react'

//antes del return creo un estado para controlar si se muestra o no el texto adicional
//cambio el estado de mostrarMas con ! en el evento de click
//y utilizo renderizado condicional cuando MostrarMas es verdadero para que se vea el texto adicional


function About() {

    const [mostrarMas, setMostrarMas]= useState(false)

    return (
        <section className="about">
            <h2>
                Sobre mi
            </h2>
            
            <p>
                Soy un Estudiante de Programacion y me interesa el desarrollo de Aplicaciones Web. 
            </p>


            {mostrarMas && (
                <p>
                   Actualmente sigo aprendiendo y formandome pero generando experiencia dando soluciones a negocios chicos, con tecnologias como React, MySQL, entre otras. 
                </p>
            )}

            <button onClick={()=> setMostrarMas(!mostrarMas)}>
                {mostrarMas ? 'Ver menos' : 'Ver mas'}
            </button>
        </section>
    )
}

export default About