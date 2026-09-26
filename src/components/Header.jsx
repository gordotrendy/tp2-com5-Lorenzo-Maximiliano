//se crea una funcion que devuelva JSX para utilizarlo como componente
//como parametro pongo los props que serian info de un componente que recibe otro componente
function Header({nombre,profesion}) {

    return (
        <header>
            <img src="/yo.jpeg" alt="Foto de Maximiliano Lorenzo"/>

            <div>
            <h1>{nombre}</h1>
            <p>{profesion}</p>
            </div>
        </header>
    )
}


//esto permite importarlo desde otro archivo
export default Header