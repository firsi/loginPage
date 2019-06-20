import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {setUser} from './setUserActions';
export const REQUEST_USER_BEGIN = 'REQUEST_USER_BEGIN';
export const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS';
export const REQUEST_USER_FAILURE = 'REQUEST_USER_FAILURE';

export const requestUserBegin = () => (
     {
        type: REQUEST_USER_BEGIN
    }
);

export const requestUserSuccess = (user) =>( {
    type: REQUEST_USER_SUCCESS,
    payload:user
});

export const requestUserFailure = (error) => ({
    type: REQUEST_USER_FAILURE,
    payload: error
});

export  function requestUser(user, history){
    return dispatch => {
        
        dispatch(requestUserBegin());
        return axios.post('/api/users/login', user)
        .then(response => { 
            if(response.data.success){

            const token = response.data.token;
            localStorage.setItem('jwt', token);
            const decoded_token = jwt_decode(token);
            dispatch(requestUserSuccess(decoded_token));
            history.push('/');
            dispatch(setUser(decoded_token));
            }
            else{
                dispatch(requestUserFailure(
                    {error:"Unknown error, Please try again later"}
                ))
            }
            
            
        })
        .catch(error => dispatch(requestUserFailure(error.response.data)));
       
        
    }
}