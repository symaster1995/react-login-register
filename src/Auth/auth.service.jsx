import axios from 'axios'

const login = (username, password) => {

    return axios.post('/login', { username, password })
        .then(response => {
            localStorage.setItem('clientToken', response.data.token)
            return response.data
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

const logout = () => {
    return axios.post('/logout', {})
        .then(response => {
            localStorage.removeItem('clientToken')
            return response.data
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export const authService = {
    login,
    logout
}