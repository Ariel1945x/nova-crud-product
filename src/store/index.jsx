
import { configureStore } from '@reduxjs/toolkit'
import listOfDoctors from './slices/doctor.slice'
import listOfSpecialities from './slices/speciality.slice'

export default configureStore({
    reducer: {
        listOfDoctors,
        listOfSpecialities
	}
})