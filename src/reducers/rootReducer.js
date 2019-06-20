import {combineReducers} from 'redux';
import registerReducer from './registerReducer'
import loginReducer from './loginReducer';
import setUserReducer from './setUserReducer';

export default combineReducers({

        registerReducer,
        loginReducer,
        setUserReducer
});