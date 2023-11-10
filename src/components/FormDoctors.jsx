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
        <section>
            <form onSubmit={handleSubmit(submit)}>

                <label htmlFor="firstName">Nombre</label>
                <input 
                type="text" 
                id="firstName"
                {...register("firstName", {required: true})}
                />

                <label htmlFor="lastName">Apellido</label>
                <input 
                type="text" 
                id="lastName"
                {...register("lastName", {required: true})}
                />

                <label htmlFor="descript">Descripción </label>
                <input 
                type="text"
                id="descript"
                {...register("descript", {required: true})}
                />

                <label htmlFor="specialityId">Especialidad</label>
                <select 
                id="specialityId"
                {...register("specialityId", {required: true})}
                >
                    {specialities.map(speciality => (
                    <option value={speciality.id} key={speciality.id}>{speciality.speDoc}</option>
                    ))
                }
                </select>

                <button>Crear</button>

            </form>

            <section>
                <ul>
                {
                    doctors.map(doctor => (
                        <li key={doctor.id}>
                            {doctor.firstName} {doctor.lastName} {doctor.speciality?.speDoc}<br />
                            {doctor.descript}<br />
                            <img src={doctor.images[0].url} style={{width: 200, height: 300}}/><br />
                            <button onClick={() => editDocotors(doctor)}>Edit ✍️</button>
                            <button onClick={() => deleteDoctors(doctor.id)}>Borrar 🚮</button>
                        </li>
                    ))
                }
                </ul>
            </section>

        </section>
    )
} 

export default FormDoctors