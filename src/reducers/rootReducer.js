import counterReducer from './counterReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    myCounter: counterReducer
})

export default rootReducer