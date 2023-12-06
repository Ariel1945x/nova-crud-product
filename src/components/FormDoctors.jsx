import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { 
    thunkGetDoctors,
    thunkPostDoctors,
    thunkPutDoctors,
    thunkDeleteDoctors
} from "../store/slices/doctor.slice"
import { thunkGetSpecialities } from "../store/slices/speciality.slice"

const FormDoctors = () => {

    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()
    const doctors = useSelector(state => state.listOfDoctors)
    const specialities = useSelector(state => state.listOfSpecialities)
    const [ doctorEdit, setDoctorEdit ] = useState(null)

    console.log(doctors);

    useEffect(() => {
        if (doctorEdit) {
            reset({
                firstName: doctorEdit.firstName,
                lastName: doctorEdit.lastName,
                descript: doctorEdit.descript,
                specialityId: doctorEdit.specialityId
            })
        } else {
            reset({
                firstName: "",
                lastName: "",
                descript: "",
                specialityId: ""
            })
        }

        dispatch(thunkGetDoctors())
        dispatch(thunkGetSpecialities())
    }, [dispatch, doctorEdit, reset])

    const submit = (data) => {
        if (doctorEdit) {
            dispatch(thunkPutDoctors(doctorEdit.id, data))
        } else {
            dispatch(thunkPostDoctors(data))
        }
    }

    const editDocotors = body => {
        setDoctorEdit(body)
    }

    const deleteDoctors = id => {
        dispatch(thunkDeleteDoctors(id))
    }

    return (
        <section className="formdoc_sec">
            <form className="formdoc_form" onSubmit={handleSubmit(submit)}>

                <label className="formdoc_label" htmlFor="firstName">Nombre</label>
                <input className="formdoc_input" 
                type="text" 
                id="firstName"
                {...register("firstName", {required: true})}
                />

                <label className="formdoc_label" htmlFor="lastName">Apellido</label>
                <input className="formdoc_input" 
                type="text" 
                id="lastName"
                {...register("lastName", {required: true})}
                />

                <label className="formdoc_label" htmlFor="descript">Descripción </label>
                <input className="formdoc_input" 
                type="text"
                id="descript"
                {...register("descript", {required: true})}
                />

                <label className="formdoc_label" htmlFor="specialityId">Especialidad</label>
                <select className="formdoc_input" 
                id="specialityId"
                {...register("specialityId", {required: true})}
                >
                    {specialities.map(speciality => (
                    <option value={speciality.id} key={speciality.id}>{speciality.speDoc}</option>
                    ))
                }
                </select>

                <button className="formdoc_btn">Crear</button>

            </form>

            <section className="formdoc_sec-one">
                <ul className="formdoc_ul">
                {
                    doctors?.map(doctor => (
                        <li className="formdoc_li" key={doctor.id}>

                            <div className="formdoc_div-img">
                                <img className="formdoc_img" src={doctor.images[0]?.url}/>
                            </div>

                            <div className="formdoc_div-text">
                                Nombre: {doctor.firstName} {doctor.lastName}
                                <br />Especialidad: {doctor.speciality?.speDoc}
                                <br />Detalle: {doctor.descript}
                            </div>

                            <div className="formdoc_div">
                                <button className="formdoc_btn-one" onClick={() => editDocotors(doctor)}>Edit ✍️</button>
                                <button className="formdoc_btn-two" onClick={() => deleteDoctors(doctor.id)}>Borrar 🚮</button>    
                            </div>

                        </li>
                    ))
                }
                </ul>
            </section>

        </section>
    )
} 

export default FormDoctors