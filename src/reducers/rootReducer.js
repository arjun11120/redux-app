import counterReducer from './counterReducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    myCounter: counterReducer
})

export default rootReducer