import axios from 'axios';

const login = (username, password) => {

    return axios.post('/login', { username, password })
    .then(response => {
        return response.data
    })
    .catch(error =>{
        return Promise.reject(error);
    });
}

export const authService = {
    login,
};