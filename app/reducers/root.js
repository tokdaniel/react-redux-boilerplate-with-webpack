import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const exampleReducer = (state = '', action) => {
    switch (action.type){
        case types.EXAMPLE:
            return action.data;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    exampleReducer,
    routing
});

export default rootReducer;
