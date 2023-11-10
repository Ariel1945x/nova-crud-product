import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const imageSlice = createSlice({
    name: 'listOfImages',
    initialState: [],
    reducers: {
        setListOfImages: (state, action) => {
            return action.payload
        }
    }
})

export const thunkGetImages = () => (dispatch) => {
    return axios
        .get(`http://localhost:8080/images`)
        .then(resp => dispatch(setListOfImages(resp.data)))
        .catch(error => console.log(error))
}

export const thunkPostImages = (image) => (dispatch) => {
    return axios
        .post(`http://localhost:8080/images`, image)
        .then(() => dispatch(thunkGetImages()))
        .catch(error => console.log(error.data))
}

export const thunkDeleteImages = (id) => (dispatch) => {
    return axios
        .delete(`http://localhost:8080/images/${id}`)
        .then(() => dispatch(thunkGetImages()))
        .catch(error => console.log(error.data))
}

export const { setListOfImages } = imageSlice.actions;

export default imageSlice.reducer;
