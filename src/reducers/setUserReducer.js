import {SET_USER} from '../actions/setUserActions';

const initialState = {
    authenticated: false,
    user: {}
}

export default function setUserReducer ( state=initialState, action){
    switch(action.type){
        case SET_USER:
            return {
                authenticated: true,
                user: action.payload
            }
        default:
            return state;
    }
} 