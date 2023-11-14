import { Link } from "react-router-dom"

const Raiz = () => {
    return (
        <section className="raiz_sec">
            <h1 className="raiz_h1">Bienvenidos a Novasalud Plataforma de integración de datos</h1>

            <section className="raiz_sec-one">
                <Link className="raiz_link" to='/doctors'>Doctores</Link> <br />
                <Link className="raiz_link" to='/specialities'>Especialidades</Link> <br />
            </section>

            <section className="raiz_sec-two">
                <p className="raiz_p">
                La plataforma integral privada diseñada exclusivamente para el manejo eficiente del personal en la base de datos representa una herramienta avanzada y segura para el equipo autorizado de la Clínica Novasalud. Este sistema, meticulosamente desarrollado, está destinado a simplificar y optimizar las operaciones diarias, proporcionando una experiencia integral y personalizada.
                En el núcleo de esta plataforma, se encuentra una base de datos robusta y segura que almacena de manera confiable la información del personal.
                </p>
            </section>
        </section>
    )
} 

export default Raiz