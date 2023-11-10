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
        .get(`postgres://nova_db_product_start_user:FS07BRAdXvTOuSnkntElRj6OlGzI7Z1y@dpg-cl6pk18icrhc73ct2dmg-a.oregon-postgres.render.com/nova_db_product_start/specialities`)
        .then(resp => dispatch(setSpecialities(resp.data)))
        .catch(error => console.log(error))
}

export const thunkPostSpecialities = (data) => (dispatch) => {
    return axios
        .post(`postgres://nova_db_product_start_user:FS07BRAdXvTOuSnkntElRj6OlGzI7Z1y@dpg-cl6pk18icrhc73ct2dmg-a.oregon-postgres.render.com/nova_db_product_start/specialities`, data)
        .then(() => dispatch(thunkGetSpecialities()))
        .catch(error => console.log(error))
}

export const thunkPutSpecialities = (id, data) => (dispatch) => {
    return axios
        .put(`postgres://nova_db_product_start_user:FS07BRAdXvTOuSnkntElRj6OlGzI7Z1y@dpg-cl6pk18icrhc73ct2dmg-a.oregon-postgres.render.com/nova_db_product_start/specialities/${id}`, data)
        .then(() => dispatch(thunkGetSpecialities()))
        .catch(error => console.log(error))
}

export const thunkDeleteSpecialities = id => (dispatch) => {
    return axios
        .delete(`postgres://nova_db_product_start_user:FS07BRAdXvTOuSnkntElRj6OlGzI7Z1y@dpg-cl6pk18icrhc73ct2dmg-a.oregon-postgres.render.com/nova_db_product_start/specialities/${id}`)
        .then(() => dispatch(thunkGetSpecialities()))
        .catch(error => console.log(error))
}

export const { setSpecialities } = specialitySlice.actions;

export default specialitySlice.reducer;