import FormSpeciality from "../components/FormSpeciality"
import { Link } from "react-router-dom"

const Specialities = () => {
    return (
        <section className="spe_sec">
            <h1 className="spe_h1">Especialidades</h1>
            <Link className="spe_link" to='/'>Raíz</Link>
            <FormSpeciality/>
        </section>
    )
} 

export default Specialities