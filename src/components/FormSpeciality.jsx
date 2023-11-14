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
        <section className="formspe_sec">
            <form onSubmit={handleSubmit(submit)} className="formspe_form">

                <label className="formspe_label" htmlFor="speDoc">Especialidad</label>
                <input 
                className="formspe_input"
                type="text" 
                id="speDoc"
                name="speDoc"
                {...register("speDoc", {required: true})}
                />

                <button className="formspe_btn">Crear</button>

            </form>

            <section className="formspe_sec-one">
                <ul className="formspe_ul">
                    {
                        specialities?.map(speciality => (
                            <li className="formspe_li" key={speciality.id}>
                                {speciality.speDoc} <br />
                                <div className="formspe_div">
                                    <button className="formspe_btn-one" onClick={() => sendToInfo(speciality)}>Editar ✍️</button>
                                    <button className="formspe_btn-two" onClick={() => deleteInfo(speciality.id)}>Borrar 🚮</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </section>
    )
} 

export default FormSpeciality