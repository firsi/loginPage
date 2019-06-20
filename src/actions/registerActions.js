import axios from 'axios';
export const SEND_USER_BEGIN = 'SEND_USER_BEGIN';
export const SEND_USER_SUCCESS = 'SEND_USER_SUCCESS';
export const SEND_USER_FAILURE = 'SEND_USER_FAIL';

export const sendUserBegin = () => {
    return {
        type: SEND_USER_BEGIN
    }
}

export const sendUserSuccess = (history) => {
    return {
        type: SEND_USER_SUCCESS
       
    }
}

export const sendUserFailure = (error) => ({
    type: SEND_USER_FAILURE,
    payload: error
})


export function sendUser(user, history) {
    return dispatch => {
        dispatch(sendUserBegin());

        return axios.post('/api/users/register', user)
        .then(response => console.log('success'))
        .catch(error => dispatch(sendUserFailure(error)))
        
    }
}