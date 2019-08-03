import * as config from './app.config';
import axios from 'axios';

export const userService = {
    login,
    logout,
};

function login(username, password) {
    const data  = { username, password };
    return axios.post(`${config.apiUrl}/users/authenticate`, data)
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}