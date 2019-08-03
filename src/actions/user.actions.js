import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';

export const userActions = {
    login,
    logout,
};

function login(username, password) {
    return dispatch => {
        dispatch({
            type: 'LOGIN',
            payload: userService.login(username, password)
        })
    };
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}