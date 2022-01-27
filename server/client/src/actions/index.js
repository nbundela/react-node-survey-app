import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = () =>  
    async(dispatch) => {
        const res = await axios.get('/api/current_user');
        dispatch({type: FETCH_USER, payload: res.data});
}

    // export const fetchUser = () =>  
    // async(dispatch) => {
    //     const res = await axios.get('/api/current_user');
        
    //     dispatch({type: FETCH_USER, payload: res});
    // }
    // const data = await axios.get('/api/current_user');

    // this is the manual way
    // return {
    //     type: FETCH_USER,
    //     payload: data
    // }

export const handleToken = (token) =>
    async(dispatch) => {
        const res = await axios.post('/api/stripe',token);
        dispatch({type: FETCH_USER, payload:res.data})
    }
