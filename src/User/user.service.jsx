import axios from 'axios';
import { authHeader } from '../_helpers';

const createUser = postData => {
	return axios.post('/users', postData)
	.then(response => {
		return response.data
	})
	.catch(error => {
		return Promise.reject(error)
	})
}

export const userService = {
	createUser
}