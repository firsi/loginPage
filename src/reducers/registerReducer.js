import {SEND_USER_BEGIN, SEND_USER_SUCCESS, SEND_USER_FAILURE} from '../actions/registerActions';
const initialState = {
                        
                        loading : true,
                        error: null
                    };


export default function registerReducer (state=initialState, action) {

        switch (action.type){
            
            case SEND_USER_BEGIN: 
            return {
                ...state,
                loading: true
            }

            case SEND_USER_FAILURE:
                return{
                    ...state,
                    loading: false,
                    error: action.payload.error
                }
            default : 
            return state;
        }
    
}