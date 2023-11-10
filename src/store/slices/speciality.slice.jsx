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
        .get(`https://nova-db-product-start.onrender.com/specialities`)
        .then(resp => dispatch(setSpecialities(resp.data)))
        .catch(error => console.log(error))
}

export const thunkPostSpecialities = (data) => (dispatch) => {
    return axios
        .post(`https://nova-db-product-start.onrender.com/specialities`, data)
        .then(() => dispatch(thunkGetSpecialities()))
        .catch(error => console.log(error))
}

export const thunkPutSpecialities = (id, data) => (dispatch) => {
    return axios
        .put(`https://nova-db-product-start.onrender.com/specialities/${id}`, data)
        .then(() => dispatch(thunkGetSpecialities()))
        .catch(error => console.log(error))
}

export const thunkDeleteSpecialities = id => (dispatch) => {
    return axios
        .delete(`https://nova-db-product-start.onrender.com/specialities/${id}`)
        .then(() => dispatch(thunkGetSpecialities()))
        .catch(error => console.log(error))
}

export const { setSpecialities } = specialitySlice.actions;

export default specialitySlice.reducer;