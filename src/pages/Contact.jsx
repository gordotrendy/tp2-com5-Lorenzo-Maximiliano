import React from 'react'

function Contact() {
    const contactos = 
    [
    { id: 'mail', etiqueta: 'Correo', texto: 'lorenzomaxi12@gmail.com', enlace: 'mailto:lorenzomaxi12@gmail.com' },
    { id: 'github', etiqueta: 'GitHub', texto: 'github.com/gordotrendy', enlace: 'https://github.com/gordotrendy' },
    { id: 'linkedin', etiqueta: 'LinkedIn', texto: 'linkedin.com/maximiliano-lorenzo', enlace: 'www.linkedin.com/in/maximiliano-lorenzo-bb8b23418'},
    ]

  return (

    <section className='contact'>
        <h2>Contacto</h2>
        <ul className='contact-list'>
            {contactos.map((c)=> (
                <li key={c.id}>
                    {c.etiqueta}:{''}
                    <a href={c.enlace} target='_blank' rel='noopener noreferrer'>
                        {c.texto}
                    </a>
                </li>
            ))}
        </ul>
    </section>
    
  )
}

export default Contact