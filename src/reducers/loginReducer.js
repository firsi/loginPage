import {REQUEST_USER_BEGIN, REQUEST_USER_SUCCESS, REQUEST_USER_FAILURE} from '../actions/loginActions';

const initialState = {
    authenticated: false,
    user: null,
    loading: true,
    error:{}
}

export default function loginReducer(state=initialState, action){

    switch (action.type){
        case REQUEST_USER_BEGIN:
        return{
                ...state,
                loading:true
        }

        case REQUEST_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                authenticated: true,
                user: action.payload
            }

        case REQUEST_USER_FAILURE:
            
            return {
                
                error: action.payload
            }

        default:
            return state;
    }

}