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
        .get(`postgres://nova_db_product_start_user:FS07BRAdXvTOuSnkntElRj6OlGzI7Z1y@dpg-cl6pk18icrhc73ct2dmg-a.oregon-postgres.render.com/nova_db_product_start/doctors`)
        .then(resp => dispatch(setListOfDoctors(resp.data)))
        .catch(error => console.log(error))
}

export const thunkPostDoctors = (body) => (dispatch) => {
    return axios
        .post(`postgres://nova_db_product_start_user:FS07BRAdXvTOuSnkntElRj6OlGzI7Z1y@dpg-cl6pk18icrhc73ct2dmg-a.oregon-postgres.render.com/nova_db_product_start/doctors`, body)
        .then(() => dispatch(thunkGetDoctors()))
        .catch(error => console.log(error))
}

export const thunkPutDoctors = (id, body) => (dispatch) => {
    return axios
        .put(`postgres://nova_db_product_start_user:FS07BRAdXvTOuSnkntElRj6OlGzI7Z1y@dpg-cl6pk18icrhc73ct2dmg-a.oregon-postgres.render.com/nova_db_product_start/doctors/${id}`, body)
        .then(() => dispatch(thunkGetDoctors()))
        .catch(error => console.log(error))
}

export const thunkDeleteDoctors = (id) => (dispatch) => {
    return axios
        .delete(`postgres://nova_db_product_start_user:FS07BRAdXvTOuSnkntElRj6OlGzI7Z1y@dpg-cl6pk18icrhc73ct2dmg-a.oregon-postgres.render.com/nova_db_product_start/doctors/${id}`)
        .then(resp => dispatch(setListOfDoctors(resp.data)))
        .catch(error => console.log(error))
}

export const { setListOfDoctors } = doctorSlice.actions;

export default doctorSlice.reducer;
