import FormDoctors from "../components/FormDoctors"
import { Link } from "react-router-dom"

const Doctors = () => {
    return (
        <section className="doc_sec">
            <h1 className="doc_h1">Doctores</h1>
            <Link className="doc_link" to='/'>Raíz</Link>
            <FormDoctors/>
        </section>
    )
} 

export default Doctors