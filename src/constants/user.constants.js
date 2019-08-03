import { ActionType } from 'redux-promise-middleware';

export const userConstants = {
    LOGIN_PENDING: `LOGIN_${ActionType.Pending}`,
    LOGIN_FULFILLED: `LOGIN_${ActionType.Fulfilled}`,
    LOGIN_REJECTED: `LOGIN_${ActionType.Rejected}`,
    
    LOGOUT: 'LOGOUT',
};
