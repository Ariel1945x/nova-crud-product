import { useForm } from "react-hook-form"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { 
    thunkPostSpecialities, 
    thunkGetSpecialities, 
    thunkPutSpecialities, 
    thunkDeleteSpecialities
} from "../store/slices/speciality.slice"

const FormSpeciality = () => {

    const dispatch = useDispatch()
    const specialities = useSelector(state => state.listOfSpecialities)
    const { register, handleSubmit, reset } = useForm()
    const [ doctorEdit, setDoctorEdit ] = useState(null)

    useEffect(() => {
        if(doctorEdit) {
            reset({speDoc: doctorEdit.speDoc})
        } else {
            reset({
                speDoc: ""
            })
        }

        dispatch(thunkGetSpecialities())
    }, [dispatch, doctorEdit, reset])

    const submit = data => {
        if(doctorEdit) {
            dispatch(thunkPutSpecialities(doctorEdit.id, data))
        } else {
            dispatch(thunkPostSpecialities(data))
        }
    }

    const sendToInfo = specialityId => {
        setDoctorEdit(specialityId)
    }

    const deleteInfo = specialityId => {
        dispatch(thunkDeleteSpecialities(specialityId))
    }

    return (
        <section>
            <form onSubmit={handleSubmit(submit)}>

                <label htmlFor="speDoc">Especialidad</label>
                <input 
                type="text" 
                id="speDoc"
                name="speDoc"
                {...register("speDoc", {required: true})}
                />

                <button>Crear</button>

            </form>

            <section>
                <ul>
                    {
                        specialities?.map(speciality => (
                            <li key={speciality.id}>
                                {speciality.speDoc} <br />
                                <button onClick={() => sendToInfo(speciality)}>Editar ✍️</button>
                                <button onClick={() => deleteInfo(speciality.id)}>Borrar 🚮</button>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </section>
    )
} 

export default FormSpeciality