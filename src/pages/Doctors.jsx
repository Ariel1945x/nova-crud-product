import FormDoctors from "../components/FormDoctors"
import { Link } from "react-router-dom"

const Doctors = () => {
    return (
        <section>
            <h1>Doctors</h1>
            <Link to='/'>Raíz</Link>
            <FormDoctors/>
        </section>
    )
} 

export default Doctors