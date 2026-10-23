function Hero({titulo, descripcion}) {
    
    return(
        <section className="hero">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </section>
    )
}

export default Hero