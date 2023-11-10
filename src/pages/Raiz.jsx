import { Link } from "react-router-dom"

const Raiz = () => {
    return (
        <section>
            <h1>Bienvenidos a Novasalud Plataforma de integración de datos</h1>
            <Link to='/doctors'>Doctores</Link> <br />
            <Link to='/specialities'>Especialidades</Link> <br />
        </section>
    )
} 

export default Raiz