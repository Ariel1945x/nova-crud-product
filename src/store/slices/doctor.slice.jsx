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
        .get(`http://localhost:8080/doctors`)
        .then(resp => dispatch(setListOfDoctors(resp.data)))
        .catch(error => console.log(error))
}

export const thunkPostDoctors = (body) => (dispatch) => {
    return axios
        .post(`http://localhost:8080/doctors`, body)
        .then(() => dispatch(thunkGetDoctors()))
        .catch(error => console.log(error))
}

export const thunkPutDoctors = (id, body) => (dispatch) => {
    return axios
        .put(`http://localhost:8080/doctors/${id}`, body)
        .then(() => dispatch(thunkGetDoctors()))
        .catch(error => console.log(error))
}

export const thunkDeleteDoctors = (id) => (dispatch) => {
    return axios
        .delete(`http://localhost:8080/doctors/${id}`)
        .then(resp => dispatch(setListOfDoctors(resp.data)))
        .catch(error => console.log(error))
}

export const { setListOfDoctors } = doctorSlice.actions;

export default doctorSlice.reducer;
