import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const specialitySlice = createSlice({
    name: 'listOfSpecialities',
    initialState: [],
    reducers: {
        setSpecialities: (state, action) => {
            return action.payload
        }
    }
})

export const thunkGetSpecialities = () => (dispatch) => {
    return axios
        .get(`http://localhost:8080/specialities`)
        .then(resp => dispatch(setSpecialities(resp.data)))
        .catch(error => console.log(error))
}

export const thunkPostSpecialities = (data) => (dispatch) => {
    return axios
        .post(`http://localhost:8080/specialities`, data)
        .then(() => dispatch(thunkGetSpecialities()))
        .catch(error => console.log(error))
}

export const thunkPutSpecialities = (id, data) => (dispatch) => {
    return axios
        .put(`http://localhost:8080/specialities/${id}`, data)
        .then(() => dispatch(thunkGetSpecialities()))
        .catch(error => console.log(error))
}

export const thunkDeleteSpecialities = id => (dispatch) => {
    return axios
        .delete(`http://localhost:8080/specialities/${id}`)
        .then(() => dispatch(thunkGetSpecialities()))
        .catch(error => console.log(error))
}

export const { setSpecialities } = specialitySlice.actions;

export default specialitySlice.reducer;