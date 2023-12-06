import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const doctorSlice = createSlice({
    name: 'listOfDoctors',
    initialState: [],
    reducers: {
        setListOfDoctors: (state, action) => {
            return action.payload
        }
    }
})

export const thunkGetDoctors = () => (dispatch) => {
    return axios
        .get(`https://nova-db-product-start.onrender.com/doctors`)
        .then(resp => dispatch(setListOfDoctors(resp.data)))
        .catch(error => console.log(error))
}

export const thunkPostDoctors = (body) => (dispatch) => {
    return axios
        .post(`https://nova-db-product-start.onrender.com/doctors`, body)
        .then(() => dispatch(thunkGetDoctors()))
        .catch(error => console.log(error))
}

export const thunkPutDoctors = (id, body) => (dispatch) => {
    return axios
        .put(`https://nova-db-product-start.onrender.com/doctors/${id}`, body)
        .then(() => dispatch(thunkGetDoctors()))
        .catch(error => console.log(error))
}

export const thunkDeleteDoctors = (id) => (dispatch) => {
    return axios
        .delete(`https://nova-db-product-start.onrender.com/doctors/${id}`)
        .then(() => dispatch(thunkGetDoctors()))
        .catch(error => console.log(error))
}

export const { setListOfDoctors } = doctorSlice.actions;

export default doctorSlice.reducer;
