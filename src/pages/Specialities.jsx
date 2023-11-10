import FormSpeciality from "../components/FormSpeciality"
import { Link } from "react-router-dom"

const Specialities = () => {
    return (
        <section>
            <h1>Specialities</h1>
            <Link to='/'>Raíz</Link>
            <FormSpeciality/>
        </section>
    )
} 

export default Specialities